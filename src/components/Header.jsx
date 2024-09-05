

import { useNavigate } from "react-router-dom";
import home_image from '../assets/icons/PicsArt_04-14-04.42 1.svg';

const Header = () => {
  const navigate = useNavigate();

  return (
    <section
      className="d-flex align-items-center justify-content-between w-100 h-100 mx-auto py-5"
      style={{ maxWidth: "1200px" }}
    >
      <div className="d-flex flex-column justify-content-center" style={{ width: "66%" }}>
        <div className="mb-4">
          <h1 className="display-4">Accelerate Innovation with Global AI Challenges</h1>
          <p className="text-white mt-3">
            AI Challenges at Dphi simulate real-world problems. It is a great place to put your AI/Data Science skills to the test on diverse datasets, allowing you to learn faster through competitions.
          </p>
        </div>
        <button
          className="btn btn-light font-weight-bold"
          style={{ width: "fit-content", color: "#003145" }} 
          onClick={() => navigate("/hackathon/admin")}
        >
          Create Challenge
        </button>
      </div>
      <img
        src={home_image}
        alt="header image"
        className="img-fluid"
        style={{ width: "33%" }}
      />
    </section>
  );
};

export default Header;
