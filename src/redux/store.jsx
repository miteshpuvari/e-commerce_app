import { configureStore } from '@reduxjs/toolkit';
import productSlice  from './productReducer';

export default configureStore({
  reducer: {
    product: productSlice
  }
})