import { createSlice } from '@reduxjs/toolkit';

const initialState = { //to enserue the information is available globlly
    cartItems: [],
  };
const CartSlice = createSlice({
    name: 'cart', //slice name
    initialState, //object representing the initial state of your slice
    reducers: { //each key-value pair represents a single reducer, where the key is the name of the action and the value is the reducer function
        addItemToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.cartItems.push({ ...action.payload, quantity: 1 });
            }
          },
          removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
          },
          clearCart(state) {
            state.cartItems = [];
          },
          increaseItemQuantity(state, action) {
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToIncrease) {
              itemToIncrease.quantity += 1;
            }
          },
          decreaseItemQuantity(state, action) {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
              itemToDecrease.quantity -= 1;
            }
          },


    }
});
export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = CartSlice.actions;
  
  export default CartSlice.reducer;