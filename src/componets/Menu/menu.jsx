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
      <div className="menu-cards">
        {carddata &&
          carddata.map((item) => {
            return (
              <Card className="card">
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={item.im}
                />
                <CardContent>
                  <div style={{ height: "60px", marginBottom: "10px" }}>
                    <Typography
                      gutterBottom
                      color="green"
                      variant="h5"
                      component="div"
                    >
                      {item.t}
                    </Typography>
                  </div>
                  <Typography variant="h6" color="black">
                    ₹ {item.p}
                  </Typography>
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
