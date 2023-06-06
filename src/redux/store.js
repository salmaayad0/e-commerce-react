import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import cart from './slices/cartCount';
// import categoryProductsSlice from './slices/categoryProductsSlice';

export const store = configureStore({
  reducer: {
    productSlice,
    cart,
  },
})
