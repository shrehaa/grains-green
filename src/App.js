import "./App.css";
import Carousels from "./componets/carousel/carousel";
import Categories from "./componets/categories/categories";
import Navbar from "./componets/navbar/navbar";
import Menu from "./componets/Menu/menu";
import About from "./componets/about/about";
import Review from "./componets/reviews/review";
import Footer from "./componets/footer/footer";
import CustomizedAccordions from "./componets/accordionMenu/accmenu";
import { useEffect, useState } from "react";

function App() {
  const [searchData, setsearchData] = useState("");
  const [cartItems, setCartItems] = useState([]);
  
  return (
    <div className="App">
      <Navbar />
      <Categories getdata={setsearchData} cartItems={cartItems} />
      <Carousels />
      <CustomizedAccordions data={searchData} setCartItems={setCartItems} />
      <About />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
