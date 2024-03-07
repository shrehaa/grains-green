import { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { menuItems, carddata } from "../../constants/constants";
import "./accmenu.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Popover from "@mui/material/Popover";

const styles = {
  cart: {
    borderRadius: "15px",
    height: "30px",
    width: "80px",
    fontSize: "12px",
    backgroundColor: "red",
    color: "white",

    "&:hover": {
      backgroundColor: "red",
      color: "white",
    },
  },
};

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  marginTop: "20px",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  color: "#000",
  fontFamily: "Lucida Sans Lucida Sans Regular Lucida Grande",
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = useState([...menuItems]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handlePopoverOpen = (event) => {
    console.log(event, "hey");
    setAnchorEl(true);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (panel) => (event, newExpanded) => {
    var array = expanded;
    if (newExpanded) {
      array.push(panel);
      setExpanded([...array]);
    } else {
      const index = array.indexOf(panel);
      if (index > -1) {
        array.splice(index, 1);
      }
      setExpanded([...array]);
    }
  };

  const popper = (item) => {
    return (
      <Popover
        id={`mouse-over-popover`}
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div style={{ height: "400px", width: "400px" }}>
          <img
            height="250px"
            width="250px"
            src="https://d3gy1em549lxx2.cloudfront.net/af6ed6ca-bf23-4cf3-b2ed-a0090b1f8b53.JPG"
          />
          <p>hi</p>
        </div>
      </Popover>
    );
  };

  const handleExpand = (panel) => {
    return expanded && expanded.includes(panel);
  };

  return (
    <div className="menu-container">
      <h2>Mouth Watering healthy food from the Greens 🌳</h2>
      <Stack className="stack" direction="row" spacing={2}>
        <Button className="filter-btn" variant="contained">
          All
        </Button>
        <Button className="filter-btn" variant="contained">
          Newly Lauched
        </Button>
        <Button className="filter-btn" variant="contained">
          Fast Delivery
        </Button>
        <Button className="filter-btn" variant="contained">
          Highly Rates
        </Button>
        <Button className="filter-btn" variant="contained">
          Chef Special
        </Button>
      </Stack>
      {menuItems.map((food, idx) => {
        return (
          <Accordion
            expanded={handleExpand(food)}
            onChange={handleChange(food)}
            key={idx}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>{food}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="menu-cards">
                {carddata &&
                  carddata.map((item) => {
                    if (item.mainCategory === food)
                      return (
                        <div id={item.i}>
                          <Card
                            aria-owns={
                              open ? `mouse-over-popover` : undefined
                            }
                            aria-haspopup="true"
                            onMouseEnter={(e) => {
                              handlePopoverOpen(e);
                            }}
                            onMouseLeave={handlePopoverClose}
                            className="cart"
                            
                            key={item.i}
                          >
                            <CardMedia
                              component="img"
                              alt="green iguana"
                              height="150px"
                              image={item.im}
                            />
                            <CardContent>
                              <h3 gutterBottom color="green" component="div">
                                {item.t}
                              </h3>

                              <h2>₹ {item.p}</h2>
                            </CardContent>
                            <CardActions>
                              <Button sx={styles.cart} size="small">
                                Add
                              </Button>
                            </CardActions>
                          </Card>
                          {popper()}
                        </div>
                      );
                  })}
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
