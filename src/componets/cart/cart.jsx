import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Button } from "@mui/material";
import "./cart.css";

const cartstyle = {
  width: "27vw",
  display: "flex",
  justifyContent: "space-between",
  margin: "30px",
};

const boxStyle = {
  display: "flex",
};

const imgBox = {
  height: "125px",
  marginLeft: "10px",
  marginRight: "10px",
  width: "35%",
};

const textBox = {
  height: "125px",
  width: "65%",
};

const Cart = ({ open, handleClose, cartData }) => {
  const [itemNum, setItemNum] = useState(1);

  const subtract = () => {
    if (itemNum === 1) {
      return;
    }
    setItemNum((prev) => prev - 1);
  };
  return (
    <Drawer anchor={"right"} open={open} onClose={handleClose}>
      <Box sx={cartstyle}>
        <h1>Cart</h1>
        <ClearIcon style={{ cursor: "pointer" }} onClick={handleClose} />
      </Box>
      <Box sx={boxStyle}>
        <Box sx={imgBox}>
          <img
            src="https://d3gy1em549lxx2.cloudfront.net/ec24e1f3-a5ae-449a-b79f-930cbc5ed7bd.JPG"
            height="100%"
            width="100%"
          ></img>
        </Box>
        <Box sx={textBox}>
          <h3 style={{ marginBottom: "50px" }}>Paneer Power breakfast</h3>
          <div className="textCont">
            <div className="counter">
              <Button onClick={subtract} sx={{ color: "black" }}>
                <RemoveIcon />
              </Button>
              <label style={{ fontSize: "15px" }}>{itemNum}</label>
              <Button
                onClick={() => setItemNum((prev) => prev + 1)}
                sx={{ color: "black" }}
              >
                <AddIcon />
              </Button>
            </div>
            <div className="val">
              <label>
                <CurrencyRupeeIcon fontSize="small" />
              </label>
              <p>{1200 * itemNum}</p>
            </div>
          </div>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Cart;
