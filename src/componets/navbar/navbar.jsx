import React from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";


const Navbar = () => {
  return (
    <div className="navbarcontainer">
      <div className="logocontainer">
        <img className="logo" src={logo} alt="Grains & Green" />
        
      </div>
      <div className="credentials">
        <button className="cred-btn">Login</button>
        <button className="cred-btn">Sign Up</button>
      </div>
      <div className="navitems"></div>
    </div>
  );
};

export default Navbar;
