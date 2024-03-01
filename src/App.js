import "./App.css";
import  Carousels  from "./componets/carousel/carousel";
import Categories from "./componets/categories/categories";
import Navbar from "./componets/navbar/navbar";
import Menu from "./componets/Menu/menu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Categories/>
      <Carousels/>
      <Menu/>
    </div>
  );
}

export default App;
