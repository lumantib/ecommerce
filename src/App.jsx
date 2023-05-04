import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Products from "./components/Products";
import Register from "./components/Register";
import Product_men from "./components/Product_men";
import Product_women from "./components/Product_women";
import Login from "./components/Login";
import Seller from "./components/Seller";
import { useEffect } from "react";
import Admin from "./components/Admin/Admin";
import ItemsAddPage from "./components/Sellers/ItemsAddPage";
import CheckoutPage from "./components/Checkout/CheckoutPage";
import Settings from "./components/Admin/Settings";
import About from "./components/Admin/About";


const App = () => {
  useEffect(() => {
    const importTE = async () => {
      await import("tw-elements");
    };
    importTE();
  }, []);
  return (

    <Routes>
      <Route path="" element={<Home />} />
      <Route path="product" element={<Products />} />
      <Route path="product/checkout" element={<CheckoutPage />} />
      {/* <Route path="product_women" element={<Product />} />
      <Route path="product_men" element={<Product />} />
      <Route path="product_kids" element={<Product />} /> */}
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="Admin" element={<Admin />} />
      <Route path="seller" element={<Seller />} />
      <Route path="seller/add" element={<ItemsAddPage />} />
      <Route path="settings" element={<Settings/>} />
      <Route path="about" element={<About/>} />
    

    </Routes>

  )

};
export default App;