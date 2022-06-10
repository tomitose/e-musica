import "./App.css";
//import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/AboutUs/AboutUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/aboutus" element={ <AboutUs/> }></Route>
        </Routes>
          {/* <ItemCount initial={1}/> */}
    </BrowserRouter>
  );
}

export default App;
