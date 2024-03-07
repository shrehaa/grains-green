import "./App.css";
import  Carousels  from "./componets/carousel/carousel";
import Categories from "./componets/categories/categories";
import Navbar from "./componets/navbar/navbar";
import Menu from "./componets/Menu/menu";
import About from "./componets/about/about";
import Review from "./componets/reviews/review";
import Footer from "./componets/footer/footer";
import CustomizedAccordions from "./componets/accordionMenu/accmenu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Categories/>
      <Carousels/>
      <CustomizedAccordions/>
      <About/>
      <Review/>
      <Footer/>
      
    </div>
  );
}

export default App;
