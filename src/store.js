import { configureStore } from '@reduxjs/toolkit';

//Import all slices
import cartReducer from './Components/CartSlice';


const store = configureStore({
  reducer: {
    cart: cartReducer, //Add sliceName, sliceReducer
  },
});

export default store;