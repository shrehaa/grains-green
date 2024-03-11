import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "./login.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

function Login({ open, handleClose, type }) {
  const [emailR, setmailR] = useState("");
  const [passwordR, setpasswordR] = useState("");
  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const localName = localStorage.getItem("name");

  const handleuserChange = (e) => {
    setmailR(e.target.value);
  };

  const handlePassChange = (e) => {
    setpasswordR(e.target.value);
  };
  const handlecalls = (type) =>{
    if(type==="Login"){
        handleSignIn();
    }
    else
    handleClick();
  }
  const handleClick = () => {
    console.log(emailR, passwordR);
    if (emailR !== "" && passwordR !== "") {
      localStorage.setItem("username", emailR);
      localStorage.setItem("password", passwordR);
      localStorage.setItem("signUp", emailR);
      alert("Account created successfully!! Now please Sign In");
      window.location.reload();
    }
  };

  const handleSignIn=()=>{
    if(emailR==localEmail&&passwordR==localPassword){
        localStorage.setItem("signUp",emailR)
        window.location.reload()
    }else{
        alert("Please Enter valid Credential")
    }
   }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="modal-main">
            <Typography
              sx={{ fontFamily: "serif" }}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Welcome to Greens & Grains 🌿
            </Typography>
            <div className="inputbox">
              <TextField
                value={emailR}
                onChange={handleuserChange}
                color="success"
                label="Username"
                required
                variant="standard"
              />
              <TextField
                sx={{ marginTop: "10px" }}
                value={passwordR}
                onChange={handlePassChange}
                color="success"
                label="Password"
                required
                type="password"
                variant="standard"
              />
            </div>
            <Button
              sx={{
                color: "#fff",
                backgroundColor: "#2f6a34",
                "&:hover": { backgroundColor: "#2f6a34" },
              }}
              variant="contained"
              onClick={handlecalls(type)}
            >
              {type}
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Login;
