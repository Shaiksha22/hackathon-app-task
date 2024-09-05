import Navbar from "./Navbar";


const ErrorLayout = ({ children }) => {
  return (
    <div>
      {/* This div will only be visible on extra-large screens and above */}
      <div className="d-none d-xl-block bg-light">
        <Navbar />
        <main>{children}</main>
        
      </div>

      {/* This message will only be visible on screens smaller than extra-large */}
      <h2 className="d-xl-none d-flex justify-content-center align-items-center vh-100 p-3 text-center"   style={{ color: "white" }}>
        Hi, this site isn't made mobile responsive yet, kindly visit the same in
        desktop mode. Thanks for your understanding.......
      </h2>
    </div>
  );
};

export default ErrorLayout;
