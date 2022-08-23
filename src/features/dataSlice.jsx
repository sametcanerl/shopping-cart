import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sliderItems, categories, popularProducts } from "../data";

const initialState = {
  // slidersItems: [],
  categories: [],
  popularProducts: [],
  products: [],
  cartQuantity: 0,
  total: 0,
};

//Redux Toolkit ve Thunk bilgilerini pekiştirmek  amacı için kullanılmıştır.
//API'den veri çekme similasyonu gibi düşünülebilir.
//İlgili Data'yı ilgili componentte direkt import edip kullanabilirdik.
export const getSlidersItems = createAsyncThunk(
  "slidersItems/getSlidersItems",
  () => {
    return sliderItems;
  }
);

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  () => {
    return categories;
  }
);

export const getPopularProducts = createAsyncThunk(
  "popularProducts/getPopularProducts",
  () => {
    return popularProducts;
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cartQuantity += 1;
      state.products.push(action.payload);

      state.total += action.payload.price * action.payload.quantity;
    },
   
  },
  extraReducers: {
    [getSlidersItems.fulfilled]: (state, { payload }) => {
      state.sliderItems = payload;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.categories = payload;
    },
    [getPopularProducts.fulfilled]: (state, { payload }) => {
      state.popularProducts = payload;
    },
  },
});

export const { addProduct } = dataSlice.actions;

export default dataSlice.reducer;