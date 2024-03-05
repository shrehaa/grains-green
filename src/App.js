import "./App.css";
import  Carousels  from "./componets/carousel/carousel";
import Categories from "./componets/categories/categories";
import Navbar from "./componets/navbar/navbar";
import Menu from "./componets/Menu/menu";
import About from "./componets/about/about";
import Review from "./componets/reviews/review";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Categories/>
      <Carousels/>
      <Menu/>
      <About/>
      <Review/>
    </div>
  );
}

export default App;
