import { useState } from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";
import Login from "../Login/login";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [btnName, setbtnName] = useState(null);
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedin"));

  const handleOpen = (e) => {
    setOpen(true);
    setbtnName(e.target.name);
  };
  const handleClose = () => setOpen(false);

  const handleLogout = () => {
    localStorage.setItem("loggedin", false);
    setLoggedIn('false');
  };

  console.log(loggedIn, "log in val")

  return (
    <div className="navbarcontainer">
      <Login
        open={open}
        handleClose={handleClose}
        type={btnName}
        setLoggedIn={setLoggedIn}
      />
      <div className="logocontainer">
        <img className="logo" src={logo} alt="Grains & Green" />
      </div>
      <div className="credentials">
        {loggedIn === 'false' ? (
          <div>
            <button
              className="cred-btn"
              name="Login"
              onClick={(e) => handleOpen(e)}
            >
              Login
            </button>
            <button
              name="Sign Up"
              onClick={(e) => handleOpen(e)}
              className="cred-btn"
            >
              Sign Up
            </button>
          </div>
        ) : loggedIn === 'true' ? (
          <button name="Logout" onClick={handleLogout} className="cred-btn">
            Logout
          </button>
        ) : null}
      </div>
      <div className="navitems"></div>
    </div>
  );
};

export default Navbar;
