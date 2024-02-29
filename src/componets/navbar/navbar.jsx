import React from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";
import search from "../../assets/search.png";

const Navbar = () => {
  return (
    <div className="navbarcontainer">
      <div className="logocontainer">
        <img className="logo" src={logo} alt="Grains & Green" />
        <div>
          <input
            className="searchbox"
            placeholder="Enter cusine, resturant or mood"
            name="search"
          />
          <img className="searchicon" src={search} />
        </div>
      </div>
      <div className="credentials">
        <button className="cred-btn">Sign UP</button>
        <button className="cred-btn">Sign UP</button>
      </div>
      <div className="navitems"></div>
    </div>
  );
};

export default Navbar;
