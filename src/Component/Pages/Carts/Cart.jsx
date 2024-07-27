import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../../Store/Cartslice';

const Cart = () => {
  const cartItems = useSelector((state) => state.productstore.cart);
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    setPrice(totalPrice);
  }, [cartItems]);

  const handlePayment = (method) => {
    alert(`Payment with ${method} is successful!`);
    dispatch(clearCart());
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4 lg:p-10">
      <div className="flex flex-col lg:flex-row shadow-lg rounded-lg overflow-hidden bg-white">
        <div className="w-full lg:w-2/3 p-5">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))
          ) : (
            <p className="text-xl font-bold mt-5 text-center">Your cart is empty.</p>
          )}
        </div>

        <div className="w-full lg:w-1/3 bg-gray-800 text-white p-6 lg:p-10 flex flex-col justify-center items-center">
          <div className="mb-8 text-center">
            <h1 className="text-2xl lg:text-3xl font-bold">Total Price</h1>
            <h2 className="text-3xl lg:text-4xl font-semibold mt-4">${price.toFixed(2)}</h2>
          </div>

          <div className="w-full flex flex-col items-center">
            <button
              className="bg-green-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full w-full hover:bg-green-600 mb-4 transition transform hover:scale-105"
              onClick={() => handlePayment('PayPal')}
            >
              Pay with PayPal
            </button>

            <button
              className="bg-blue-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full w-full hover:bg-blue-600 transition transform hover:scale-105"
              onClick={() => handlePayment('Credit Card')}
            >
              Pay with Credit Card
            </button>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Cart;
