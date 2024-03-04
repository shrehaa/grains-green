import "./App.css";
import  Carousels  from "./componets/carousel/carousel";
import Categories from "./componets/categories/categories";
import Navbar from "./componets/navbar/navbar";
import Menu from "./componets/Menu/menu";
import About from "./componets/about/about";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Categories/>
      <Carousels/>
      <Menu/>
      <About/>
    </div>
  );
}

export default App;
