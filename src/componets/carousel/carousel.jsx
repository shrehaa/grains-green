import "./carousel.css";
import { src } from "../../constants/constants";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const Carousels = () => {
  function Item({ item, name, des }) {
    return (
      <div className="polygon">
      <Paper className="papermui">
        <h2>The menu's most hot favourite & famous dishes</h2>
        <img className="img-food" alt="food" src={item} />
        {/* <Button className="CheckButton">{name}</Button> */}
      </Paper>
      <div className="clipped">
      <h1>{name}</h1>
      <p className="para">{des}</p>
      </div>
      
      </div>
    );
  }
  return (
    <div className="carousel-container">
      <Carousel className="mui-carousel">
        {src &&
          src.map((item, i) => {
            return <Item key={i} item={item.img} name={item.name} des={item.description} />;
          })}
      </Carousel>
    </div>
  );
};
export default Carousels;
