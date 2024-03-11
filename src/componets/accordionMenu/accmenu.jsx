import { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { menuItems, carddata, categories } from "../../constants/constants";
import "./accmenu.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";

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
  const [showOptions, setshowOptions] = useState(carddata);

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

  const handleExpand = (panel) => {
    return expanded && expanded.includes(panel);
  };

  const filterContent = (arr, fil) => {
    var data = arr.filter((item) => {
      return item.ct && item.ct.includes(fil);
    });
    setshowOptions(data);
  };

  return (
    <div className="menu-container">
      <h2>Mouth Watering healthy food from the Greens 🌳</h2>
      <Stack className="stack" direction="row" spacing={2}>
        {categories.map((item) => {
          return (
            <Button
              onClick={() => filterContent(carddata, item.toLowerCase())}
              className="filter-btn"
              variant="contained"
            >
              {item}
            </Button>
          );
        })}
      </Stack>
      {menuItems.map((food, idx) => {
        return (
          <Accordion
            expanded={handleExpand(food)}
            onChange={handleChange(food)}
            key={idx}
            id={food}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>{food}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="menu-cards">
                {showOptions &&
                  showOptions.map((item) => {
                    if (item.mainCategory === food) {
                      return (
                        <div>
                          <Card className="cart" key={item.i}>
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
                        </div>
                      );
                    }
                  })}
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
