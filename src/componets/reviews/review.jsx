import "./review.css";
import { reviewData } from "../../constants/constants";
import StarIcon from "@mui/icons-material/Star";

const Review = () => {
  
  const Card = ({ title, content, name }) => (
    
    <div className="card">
      <h2>{title}</h2>
      <p>"{content}"</p>
      <div style={{ textAlign: "center" }}>
        <StarIcon sx={{ color: "red" }} />
        <StarIcon sx={{ color: "red" }} />
        <StarIcon sx={{ color: "red" }} />
        <StarIcon sx={{ color: "red" }} />
        <StarIcon sx={{ color: "red" }} />
      </div>
      <br />
      <h3>{name}</h3>
    </div>
  );

  const CardContainer = (props) => (
    <div>
      
     
    <div className="cards-container">
    <h1>Reviews</h1>
      {props.cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          content={card.content}
          name={card.name}
        />
      ))}
    </div>
    </div>
  );
 
  return (
    <div className="review-container">
   
      <CardContainer cards={reviewData} />
    </div>
  );
};

export default Review;
