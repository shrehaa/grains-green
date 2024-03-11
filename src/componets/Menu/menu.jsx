import "./menu.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { carddata } from "../../constants/constants";

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

const Menu = () => {
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
      <Typography className="submenu" variant="h4" color="#000">
        Bowls
      </Typography>

      <div className="menu-cards">
        {carddata &&
          carddata.map((item) => {
            return (
              <Card className="cart">
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="150px"
                  image={item.im}
                />
                <CardContent>
                  <h3 color="green" component="div">
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
            );
          })}
      </div>
    </div>
  );
};

export default Menu;
