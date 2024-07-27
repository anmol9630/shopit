import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Component/Pages/Layout/Layout";
import Home from "./Component/Pages/Home/Home";
// import Products from "./Component/Pages/Products/Products";
import Search from "./Component/Pages/Searchs/Search";
import Cart from "./Component/Pages/Carts/Cart";
import ContactUs from "./Component/Pages/Contactus/ContactUS";
import SimpleSlider from "./Component/Pages/ShopitSlider/Slider";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "./Store/Cartslice";
import { useEffect, useState } from "react";
import ShowProduct from "./Component/Pages/productpage/ShowProduct";
// import Login from "./Component/Pages/Login/Logins";
const App = () => {
  const data = useSelector((state) => state.productstore.cart);
  const [CartLen, setCartLen] = useState(0);
  useEffect(() => {
    setCartLen(data.length); 
  }, [data]);
  console.log(data);
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout cartLen={CartLen} />}>
            <Route index element={<SimpleSlider />} />
            <Route path="/Home" element={<Home />} />
            {/* <Route path="products" element={<Products/>}/>    */}
            <Route path="search" element={<Search />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="show-product/:id" element={<ShowProduct />} />
            {/* <Route path="login" element={<Login/>}/>    */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
