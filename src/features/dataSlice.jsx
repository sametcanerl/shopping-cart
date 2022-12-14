import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sliderItems, categories, popularProducts } from "../data";

const initialState = {
  // slidersItems: [],
  // categories: [],
  // popularProducts: [],
  products: [],
  bagQuantity: 0,
  total: 0,
};

//Redux Toolkit ve Thunk bilgilerini pekiştirmek  amacı için kullanılmıştır.
//API'den veri çekme similasyonu gibi düşünülebilir.
//İlgili Data'yı ilgili componentte direkt import edip kullanabilirdik.
export const getSlidersItems = createAsyncThunk(
  "slidersItems/getSlidersItems",
 async () => {
    // const data = await fetch("https://fakestoreapi.com/products")
    // .then(res=>res.json())
    // .then(data=>data)
    // return data;
    return sliderItems
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
        state.products.unshift(action.payload);

        state.total += action.payload.price * action.payload.quantity;
      } else {
        cart.quantity += action.payload.quantity;
        state.total += action.payload.price * action.payload.quantity;
      }
    },
    cartInc: (state, action) => {
      const cart = state.products.find(
        (cart) =>
          cart.id === action.payload.id &&
          cart.color === action.payload.color &&
          cart.size === action.payload.size
      );
      if (cart) {
        cart.quantity += 1;
      }
      state.total += action.payload.price;
    },
    cartDec: (state, action) => {
      console.log(action.payload);
      const cart = state.products.find(
        (cart) =>
          cart.id === action.payload.id &&
          cart.color === action.payload.color &&
          cart.size === action.payload.size
      );
      const newCart = state.products.filter(
        (cart) =>
          cart.id !== action.payload.id ||
          cart.color !== action.payload.color ||
          cart.size !== action.payload.size
      );
      if (cart) {
        if (cart.quantity === 1) {
          const confirm = window.confirm("Are You Sure ?");
          if (confirm) {
            state.total -= action.payload.price * action.payload.quantity;
            state.bagQuantity -= 1;
            state.products = newCart;
          }
        } else {
          cart.quantity -= 1;
          state.total -= action.payload.price;
        }
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

export const { addProduct, cartInc, cartDec } = dataSlice.actions;

export default dataSlice.reducer;
