import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Product from "./components/Product_women";
import Register from "./components/Register";
import Product_men from "./components/Product_men";
import Product_women from "./components/Product_women";
import Login from "./components/Login";
import { useEffect } from "react";
import Admin from "./components/Admin";


const App=()=>
{
  useEffect(() => {
    const importTE = async () => {
      await import("tw-elements");
    };
    importTE();
  }, []);
  return(
  
    <Routes>
    <Route path="" element={<Home/>} />
    <Route path="product_women" element={<Product_women/>} />
    <Route path="product_men" element={<Product/>}/>
    <Route path="product_kids" element={<Product/>} />
    <Route path="register" element={<Register/>} />
    <Route path="login" element={<Login/>} />
    <Route path="register/Admin" element={<Admin/>} />
    
    
  </Routes>

  ) 

};
export default App;