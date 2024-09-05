


import img1 from '../assets/icons/carbon_skill-level-basic.svg'
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { items } from "../utils/items"

const ChallengeInformation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [challenge, setChallenge] = useState(items[id] || {}); // Ensure challenge is initialized

  if (!items[id]) {
    return <div className="container py-4">Challenge not found</div>; // Handle case when challenge is not found
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChallenge((prevChallenge) => ({ ...prevChallenge, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setChallenge((prevChallenge) => ({
        ...prevChallenge,
        image: URL.createObjectURL(file),
      }));
    }
  };

  const handleSave = () => {
    // Update the items array with the new challenge data
    items[id] = { ...challenge };
    setIsEditing(false);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  return (
    <section style={{backgroundColor: "#002A3B"}} className="d-flex flex-column min-vh-100 ">
      <header  style={{backgroundColor: "#002A3B"}} className="container py-5  text-white">
        <div className="d-flex justify-content-between mb-4">
          <button className="btn btn-warning text-dark">
            Starts on {formatDate(challenge.startDate)}
          </button>
          <button
            className="btn btn-light text-dark"
            onClick={() => navigate(-1)}
          >
            Go back
          </button>
        </div>
        <div className="mb-4">
          {isEditing ? (
            <div>
              <h1>Edit Challenge</h1>
              <form>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={challenge.title || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={challenge.description || ""}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Type</label>
                  <select
                    className="form-select"
                    name="type"
                    value={challenge.type || ""}
                    onChange={handleChange}
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Image</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleFileChange}
                  />
                  {challenge.image && (
                    <div className="mt-3">
                      <img
                        src={challenge.image}
                        alt="Challenge"
                        className="img-fluid"
                        style={{ maxWidth: "200px" }}
                      />
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSave}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ms-2"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </form>
            </div>
          ) : (
            <div>
              <h1>{challenge.title}</h1>
              <p>{challenge.description}</p>
              <button className="btn btn-light mt-2 d-flex align-items-center">
                {challenge.type}
                <img 
                  src={img1} 
                  alt="" 
                  style={{ marginLeft: "8px", width: "20px", height: "20px" }} 
                />
              </button>
            </div>
          )}
        </div>
      </header>
      <div className="container flex-grow-1 bg-white text-dark">
      <div className="d-flex justify-content-between align-items-center py-4" style={{ borderBottom: "2px solid #ddd", paddingBottom: "1rem", position: "relative" }}>
  <h4 style={{ paddingLeft: "10px", position: "relative", zIndex: 1, backgroundColor: "#fff", paddingRight: "10px", marginBottom: "0" }}>Overview</h4>
  
  {!isEditing && (
    <div className="d-flex">
      <button
        className="btn btn-secondary"
        style={{ marginRight: "10px", borderRadius: "50px", padding: "8px 16px" }}
        onClick={() => setIsEditing(true)}
      >
        Edit
      </button>
      <button
        className="btn btn-danger"
        style={{ borderRadius: "50px", padding: "8px 16px" }}
        onClick={() => {
          items.splice(id, 1);
          navigate("/hackathon");
        }}
      >
        Delete
      </button>
    </div>
  )}
</div>

        <div className='py-5'>
          <p>{challenge.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ChallengeInformation;
