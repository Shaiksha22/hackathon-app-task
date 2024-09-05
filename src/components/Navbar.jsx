

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
      style={{ background: "white", zIndex: 50 }}
    >
      <div className="container" style={{ maxWidth: "1200px" }}>
        <Link to="/hackathon" className="navbar-brand">
          <h4>DPhi</h4>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
