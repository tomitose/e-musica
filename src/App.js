import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/AboutUs/AboutUs";
import Merchandise from "./components/Merchandise/Merchandise";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { MyContext } from "./components/Context/MyContext";

function App() {
  return (

    <MyContext.Provider>

        <BrowserRouter>
            <Navbar />
            
            <Routes>
              <Route path="/" element={<ItemListContainer />}></Route>
              <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
              <Route path="/item/:itemId" element={ <ItemDetailContainer/> }></Route>
              <Route path="/aboutus" element={ <AboutUs/> }></Route>
              <Route path="/merchandise" element= { <Merchandise/> }></Route>
            </Routes>

            <Footer/>  
        </BrowserRouter>

    </MyContext.Provider>

  );
}

export default App;
