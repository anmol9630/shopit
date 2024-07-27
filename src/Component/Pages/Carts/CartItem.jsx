// import React from "react";
// import { useDispatch } from "react-redux";
// import {
//   additemQuantity,
//   clearitem,
//   removetemQuantity,
// } from "../../../Store/Cartslice";

// const CartItem = ({ item }) => {
//   const dispatch = useDispatch();

//   const handelremove = () => {
//     if (item.quantity > 1) {
//       dispatch(removetemQuantity(item.id));
//     } else {
//       removeitem();
//     }
//   };

//   const removeitem = () => {
//     dispatch(clearitem(item.id));
//   };

//   return (
//     <div className="flex p-4 bg-white rounded-lg shadow-md mb-4">
//       <img
//         className="w-24 h-24 object-cover rounded"
//         src={item.image}
//         alt={item.title}
//       />
//       <div className="ml-4 flex flex-col justify-between">
//         <div>
//           <h3 className="text-lg font-semibold">{item.title}</h3>
//           <p className="text-sm text-gray-600">{item.category}</p>
//           <p className="text-gray-800 mt-2">{item.description}</p>
//         </div>
//         <div className="flex justify-between items-center mt-4">
//           <span className="text-lg font-bold">${item.price}</span>
//           <span className="text-sm text-gray-500">
//             Rating: {item.rating.rate} ({item.rating.count} reviews)
//           </span>
//           <div className="flex gap-2 border-2 w-fit items-center">
//             <p
//               onClick={() => dispatch(additemQuantity(item.id))}
//               className="border-r-2 px-2 cursor-pointer"
//             >
//               +
//             </p>
//             <p className="border-r-2 px-2">{item.quantity}</p>
//             <p onClick={handelremove} className="px-2 pb-1 cursor-pointer">
//               -
//             </p>
//           </div>
//           <button
//             onClick={removeitem}
//             className="px-4 py-2 text-lg bg-lime-400 rounded-xl"
//           >
//             Remove
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItem;

import React from "react";
import { useDispatch } from "react-redux";
import {
  additemQuantity,
  clearitem,
  removetemQuantity,
} from "../../../Store/Cartslice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handelremove = () => {
    if (item.quantity > 1) {
      dispatch(removetemQuantity(item.id));
    } else {
      removeitem();
    }
  };

  const removeitem = () => {
    dispatch(clearitem(item.id));
  };

  return (
    <div className="flex flex-col md:flex-row p-4 bg-white rounded-lg shadow-md mb-4">
      <img
        className="w-full md:w-48 h-auto object-contain rounded mb-4 md:mb-0"
        src={item.image}
        alt={item.title}
      />
      <div className="ml-0 md:ml-4 flex flex-col justify-between w-full">
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.category}</p>
          <p className="text-gray-800 mt-2">{item.description}</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <span className="text-lg font-bold">${item.price}</span>
          <span className="text-sm text-gray-500">
            Rating: {item.rating.rate} ({item.rating.count} reviews)
          </span>
          <div className="flex gap-2 border-2 w-fit items-center mt-2 md:mt-0">
            <p
              onClick={() => dispatch(additemQuantity(item.id))}
              className="border-r-2 px-2 cursor-pointer"
            >
              +
            </p>
            <p className="border-r-2 px-2">{item.quantity}</p>
            <p onClick={handelremove} className="px-2 pb-1 cursor-pointer">
              -
            </p>
          </div>
          <button
            onClick={removeitem}
            className="px-4 py-2 text-lg bg-lime-400 rounded-xl mt-2 md:mt-0"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
