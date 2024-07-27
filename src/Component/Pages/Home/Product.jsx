import React, { useEffect, useState } from "react";
import { addtocart } from "../../../Store/Cartslice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "../../../Store/Store";

const ProductDetails = ({ product }) => {
  const c = useSelector((state) => state.productstore.cart);
  const [cart, setCart] = useState(c);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handel = (e) => {
    e.stopPropagation();
    let isPresent = false; 
    cart.map((item) => {
      if (item.id === product.id) isPresent = true;
    });
    if (!isPresent) {
      dispatch(addtocart({ ...product, quantity: 1 }));
      alert("Product added to cart");
    } else {
      alert("Product already in cart");
    }
  };

  useEffect(() => {
    const s = store.getState().productstore.cart;
    setCart(s);
  }, [handel]);

  const handleShowClick = () => {
    navigate("/show-product/" + product.id);
  };

  return (
    <>
      <div
        onClick={handleShowClick}
        className="border p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="mb-3 w-full h-52 md:h-64 object-contain"
        />
        <h2 className="text-lg md:text-xl font-semibold mb-2">
          {product.title}
        </h2>
        <p className="mb-2">Price: ${product.price}</p>
        <p className="mb-2">Rating: {product.rating.rate}⭐</p>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={handel}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductDetails;
