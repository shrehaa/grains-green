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
            When we say good, we don’t just mean good food. We also mean the
            goodness that good food leads to. Good memories, a good temper, a
            good day, a good burp. And we know that when our food leaves our
            kitchens, we’re creating all that. It’s rewarding, this belief in
            good. Now take a look at how we go about it.
          </p>
          <p style={{ marginTop: "25px" }}>
            <ul
              style={{
                display: "flex",
                fontSize: "16px",
                marginLeft: "10px",
                fontWeight: "bold",
              }}
            >
              <li>World Cuisine</li>
              <li>Daily - Changing Menu</li>
              <li>Farm - Fresh Ingredients</li>
              <li>Highly Expirienced Chefs</li>
            </ul>
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
