import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sliderItems, categories, popularProducts } from "../data";
import { current } from "@reduxjs/toolkit";
const initialState = {
  // slidersItems: [],
  categories: [],
  popularProducts: [],
  products: [],
  bagQuantity: 0,
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
      const cart = state.products.find(
        (cart) =>
          cart.id === action.payload.id &&
          cart.color === action.payload.color &&
          cart.size === action.payload.size
      );
      if (!cart) {
        state.bagQuantity += 1;
        state.products.push(action.payload);

        state.total += action.payload.price * action.payload.quantity;
      } else {
        cart.quantity += action.payload.quantity;
      }
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
