import "./about.css";
import healthy from "../../assets/healthy.jpg";
import people from "../../assets/people.jpg";
import rest from "../../assets/rest.jpg";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const About = () => {
  const itemData = [
    {
      img: healthy,
      title: "healthy",
    },
    {
      img: people,
      title: "people",
    },
    {
      img: rest,
      title: "rest",
    },
  ];
  return (
    <div className="about-container">
      <div className="main-container">
        <div className="text-container">
          <h2>Welcome you!</h2>
          <h1>About Grains & Greens</h1>
          <p>
            THE PIONEERS OF DELIVERING OLD TRADITIONAL STREET FOOD DELICACIES
            RIGHT FROM THE AUTHENTIC & ORIGINAL SOURCES OF OLD DELHI AT YOUR
            DOOR STEPS.
          </p>
          <p>
            The old city shares an intimate relationship with food, one that was
            founded during the Mughal Era. Here, traditions rule and history is
            served sumptuously garnished with culinary secrets that have been
            passed down through generations.
          </p>
        </div>
        <div className="image-container">
          <ImageList
            sx={{ width: 500, height: 450 }}
            variant="woven"
            cols={3}
            gap={8}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=161&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </div>
  );
};

export default About;
