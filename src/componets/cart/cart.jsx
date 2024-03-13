import Drawer from "@mui/material/Drawer";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Button } from "@mui/material";
import "./cart.css";
import Divider from "@mui/material/Divider";

const cartstyle = {
  width: "27vw",
  display: "flex",
  justifyContent: "space-between",
  margin: "30px",
};

const boxStyle = {
  display: "flex",
  margin: "12px",
};

const styleModel = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
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

const Cart = ({ open, handleClose, cartData, setCartLabel }) => {
  const [cartItems, setCartItems] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    var finalStructure = [];
    cartData &&
      cartData.map((item) => {
        let temp = {};
        temp["i"] = item.i;
        temp["t"] = item.t;
        temp["im"] = item.im;
        temp["p"] = item.p;
        temp["num"] = 1;

        finalStructure.push(temp);
      });

    setCartItems(finalStructure);
  }, [cartData]);

  useEffect(() => {
    setCartLabel(cartItems.length);
    totalPrice();
  }, [cartItems]);

  const cartAdd = (id) => {
    var addedItem = cartItems.filter((i) => i.i === id);
    addedItem[0].num++;
    setCartItems([...cartItems]);
  };

  const subtract = (id) => {
    var removedItem = cartItems.filter((i) => i.i === id);
    if (removedItem[0].num === 1) {
      return;
    } else {
      removedItem[0].num--;
      setCartItems([...cartItems]);
    }
  };

  const handlePay = () => {
    if(localStorage.getItem("loggedin")==='true'){
    handleClose();
    setCartItems([]);
    alert("Order Placed");
    window.location.reload();
    }
    else{
      alert("Please log in first");
      return;
    }
  };

  const totalPrice = () => {
    var sum = 0;
    cartItems.map((item) => {
      sum += item.p * item.num;
    });

    setFinalPrice(sum);
  };

  return (
    <Drawer anchor={"right"} open={open} onClose={handleClose}>
      <Box sx={cartstyle}>
        <h1>Cart</h1>
        <ClearIcon style={{ cursor: "pointer" }} onClick={handleClose} />
      </Box>
      {cartItems && cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, idx) => {
            return (
              <Box key={idx} sx={boxStyle}>
                <Box sx={imgBox}>
                  <img
                    src={item.im}
                    alt={item.im}
                    height="100%"
                    width="100%"
                  ></img>
                </Box>
                <Box sx={textBox}>
                  <h3 style={{ marginBottom: "50px" }}>{item.t}</h3>
                  <div className="textCont">
                    <div className="counter">
                      <Button
                        onClick={() => subtract(item.i)}
                        disabled={item.num < 2}
                        sx={{ color: "black" }}
                      >
                        <RemoveIcon />
                      </Button>
                      <label style={{ fontSize: "15px" }}>{item.num}</label>
                      <Button
                        onClick={() => cartAdd(item.i)}
                        sx={{ color: "black" }}
                      >
                        <AddIcon />
                      </Button>
                    </div>
                    <div className="val">
                      <label>
                        <CurrencyRupeeIcon fontSize="small" />
                      </label>
                      <p>{item.p * item.num}</p>
                    </div>
                  </div>
                </Box>
              </Box>
            );
          })}

          <div className="final-price">
            <Divider />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>Total Price</h2>
              <h2 style={{ marginRight: "25px" }}>₹{finalPrice}</h2>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "40px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  backgroundColor: "#2f6a34",
                  "&:hover": { backgroundColor: "#000" },
                }}
                onClick={() => handlePay()}
              >
                Pay Now
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <h2 style={{ margin: "35px" }}> OOPS! Cart is empty</h2>
      )}
    </Drawer>
  );
};

export default Cart;
