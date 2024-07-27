import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[],
        product:[],

    },
    reducers:{
        addtocart:(state,action)=>{
            state.cart.push(action.payload)
        },
        addproduct:(state,action) => {
            state.product = action.payload;
        },
        clearCart:(state,action) => {
            state.cart = [];
        },
 
        additemQuantity:(state,action) => {
            state.cart = state.cart.map(obj =>
                obj.id === action.payload ? { ...obj, quantity: obj.quantity + 1 } : obj
            );
        },
        
        removetemQuantity:(state,action) => {
            state.cart = state.cart.map(obj =>
                obj.id === action.payload ? { ...obj, quantity: obj.quantity - 1 } : obj
            );
        },

        clearitem:(state,action) =>{
          const tempcart = state.cart.filter((item) => item.id !== action.payload);
          state.cart = tempcart;
        }
    }

})
export default cartSlice.reducer;
export const {addtocart,addproduct,clearCart,additemQuantity,removetemQuantity,clearitem }=cartSlice.actions