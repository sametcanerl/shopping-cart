import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Cart from "../pages/cart/Cart";
import ComingSoon from "../pages/comingsoon/ComingSoon";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Product from "../pages/product/Product";
import Register from "../pages/register/Register";


const AppRouter = () => {

  return (
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/comingsoon" element={<ComingSoon />} />

          <Route path="/product" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
   
  );
};

export default AppRouter;
