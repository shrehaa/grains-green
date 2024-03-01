import "./App.css";
import  Carousels  from "./componets/carousel/carousel";
import Categories from "./componets/categories/categories";
import Navbar from "./componets/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Categories/>
      <Carousels/>
    </div>
  );
}

export default App;
