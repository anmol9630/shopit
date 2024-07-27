import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addtocart } from "../../../Store/Cartslice";
import store from "../../../Store/Store";

const ShowProduct = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.productstore.product[id - 1]);
  const [cart, setCart] = useState(data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    let isPresent = false;
    cart.map((item) => {
      if (item.id === data.id) isPresent = true;
    });
    if (!isPresent) {
      dispatch(addtocart({ ...data, quantity: 1 })); 
      alert("Product added to cart");
    } else {
      alert("Product already in cart");
    }
  };

  useEffect(() => {
    const f = store.getState().productstore.cart;
    setCart(f);
  }, [handleAddToCart]);

  const Backtohome = () => {
    navigate("/Home");
  };

  return (
    <>
      <div className="w-full h-auto bg-slate-800 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <img
            className="w-full md:w-[600px] h-[600px] rounded-xl object-contain"
            src={data.image}
            alt={data.title}
          />
        </div>

        <div className="w-full md:w-1/2 p-5 mt-5 md:mt-20">
          <h2 className="text-white font-bold italic text-2xl mb-2">
            Name: {data.title}
          </h2>
          <h3 className="text-white font-bold italic text-lg mb-2">
            Category: {data.category}
          </h3>
          <h3 className="text-white font-bold italic text-lg mb-2">
            Price: {data.price}$
          </h3>
          <h3 className="text-white font-bold italic text-lg mb-4">
            Description: {data.description}
          </h3>
          <h3 className="text-white text-lg mb-2">
            Rating: {data.rating.rate}⭐
          </h3>

          <button
            onClick={Backtohome}
            className="mt-10 text-1xl bg-blue-900 p-3 md:p-5 pl-5 pr-5 md:pl-10 md:pr-10 rounded-3xl font-semibold hover:bg-blue-700"
          >
            Back to home
          </button>

          <button
            onClick={handleAddToCart}
            className="mt-10 ml-3 text-1xl bg-blue-900 p-3 md:p-5 pl-5 pr-5 md:pl-10 md:pr-10 rounded-3xl font-semibold hover:bg-blue-700"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
