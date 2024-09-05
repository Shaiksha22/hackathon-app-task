




import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { items as data } from "../utils/items";

const items = [
  {
    label: "Challenge name",
    name: "title",
    type: "text",
    placeholder: "Enter challenge name",
  },
  {
    label: "Start date",
    name: "startDate",
    type: "date",
    placeholder: "Enter start date",
  },
  {
    label: "End date",
    name: "endDate",
    type: "date",
    placeholder: "Enter end date",
  },
  {
    label: "Type",
    name: "type",
    type: "select",
    options: ["Easy", "Medium", "Hard"],
    placeholder: "Select challenge type",
  },
  {
    label: "Image",
    name: "image",
    type: "file",
    placeholder: "Select challenge image",
  },
];

const Admin = () => {
  const filePickerRef = useRef(null);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    type: "Easy",
    image: null, // Start with no image
    description: "",
  });

  const { title, startDate, endDate, type, image, description } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFormData({
      ...formData,
      image: URL.createObjectURL(selectedFile),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    data.push({
      id: data.length,
      ...formData,
    });
    navigate("/hackathon");
  };

  return (
    <section className="d-flex flex-column vh-100 text-dark">
      <div className="py-4">
        <h4 className="container text-dark">Challenge Details</h4>
      </div>
      <div className="bg-white py-5 flex-1">
        <form className="container row g-4" onSubmit={handleSubmit}>
          <div className="col-md-6">
            {items.map((item) => (
              <div className="mb-3" key={item.label}>
                <label className="form-label">{item.label}</label>
                {item.type === "select" ? (
                  <select
                    className="form-select"
                    name={item.name}
                    onChange={handleChange}
                  >
                    {item.options.map((option) => (
                      <option value={option} key={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : item.type === "file" ? (
                  <input
                    type={item.type}
                    placeholder={item.placeholder}
                    name={item.name}
                    className="form-control"
                    ref={filePickerRef}
                    onChange={handleImageChange}
                  />
                ) : (
                  <input
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                    className="form-control"
                    onChange={handleChange}
                    required
                  />
                )}
                {item.type === "file" && file && (
                  <div className="position-relative mt-3">
                    <img
                      src={image} // Displaying the uploaded image
                      alt="selected"
                      className="img-fluid rounded"
                    />
                    <button
                      type="button"
                      className="btn btn-danger position-absolute end-0 bottom-0 m-2"
                      onClick={() => {
                        setFile(null);
                        setFormData({ ...formData, image: null });
                        filePickerRef.current.value = null; // Clearing the file input
                      }}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="col-md-6">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              className="form-control h-100"
              rows="6"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-success w-auto mt-4">
            Create challenge
          </button>
        </form>
      </div>
    </section>
  );
};

export default Admin;
