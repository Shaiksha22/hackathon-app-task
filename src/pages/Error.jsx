

import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center"
      style={{ backgroundColor: "#f8f9fa" }} // 
    >
      <h2 className="text-dark">Hi there, this page isn't valid</h2>
      <button
        className="btn btn-dark"
        onClick={() => navigate("/hackathon")}
      >
        Go back to home
      </button>
    </section>
  );
};

export default Error;
