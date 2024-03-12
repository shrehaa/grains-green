import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import { categories, menuItems } from "../../constants/constants";
import "./categories.css";
import search from "../../assets/search.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Cart from "../cart/cart";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 300,
    backgroundColor: "#C6DCBA",
    color: "#2f6a34",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 22,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const Categories = ({ getdata }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sval, setsval] = useState("");
  const open = Boolean(anchorEl);
  const [openCart, setOpenCart] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCartClose = () => {
    setOpenCart(false);
  };

  const handleCartOpen = () => {
    setOpenCart(true);
  };

  const handleSearch = () => {
    getdata(sval);
  };

  return (
    <div className="categories-container">
      <div className="all-cat">
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="menu-btn"
        >
          All Categories
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {menuItems &&
            menuItems.map((item, idx) => {
              return (
                <a key={idx} href={`#${item}`}>
                  <MenuItem onClick={handleClose}>{item}</MenuItem>
                </a>
              );
            })}
        </StyledMenu>
      </div>
      <div className="search-container">
        <input
          className="searchbox"
          placeholder="Enter cusine, resturant or mood"
          name="search"
          value={sval}
          onChange={(e) => setsval(e.target.value)}
        />
        <img
          className="searchicon"
          alt="search"
          src={search}
          onClick={handleSearch}
        />
      </div>
      <div className="cart-container">
        <Cart open={openCart} handleClose={handleCartClose} />
        <AddShoppingCartIcon
          sx={{
            height: "40px",
            width: "40px",
            cursor: "pointer",
            marginTop: "5px",
          }}
          onClick={handleCartOpen}
        />
        
        
        <label style={{
        borderRadius:"50%",
        backgroundColor:"red",
        marginBottom:"20px",
        fontSize:"20px",
        padding:"3px"


      }}>7</label>
      </div>
      
    </div>
  );
};

export default Categories;
