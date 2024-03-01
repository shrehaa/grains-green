import "./carousel.css";
import { src } from "../../constants/constants";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const Carousels = () => {
  function Item({ item, name }) {
    return (
      <Paper className="papermui">
        <h2>The menu's most hot favourite & famous dishes</h2>
        <img className="img-food" src={item} />
        <Button className="CheckButton">{name}</Button>
      </Paper>
    );
  }
  return (
    <div className="carousel-container">
      <Carousel className="mui-carousel">
        {src &&
          src.map((item, i) => {
            return <Item key={i} item={item.img} name={item.name} />;
          })}
      </Carousel>
    </div>
  );
};
export default Carousels;
