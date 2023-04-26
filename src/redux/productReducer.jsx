import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../constant/api";

export const fetchUserData = createAsyncThunk(
  "product/fetchUserData",
  async () => {
    const response = await axios.get(`${api}/products`);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productStatush: "",
    productList: [],
    productError: {},
    cartData: [],
  },
  reducers: {
    addTocart: (state, action) => {
      state.cartData.push(action.payload);
    },
    deleteFromCart: (state, action) => {
        state.cartData = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.productStatush = "Loading";
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.productStatush = "Succeede";
        state.productList = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.productStatush = "Failed";
        state.productError = action.error;
      });
  },
});

export const { addTocart, deleteFromCart } = productSlice.actions

export default productSlice.reducer;
