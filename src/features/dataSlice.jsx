import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sliderItems, categories } from "../data";

const initialState = {
  newsliderItems: [],
  categories: [],

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

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    clearNewData: (state) => {
      state.sliderItems = [];
      state.categories = [];
    },
  },
  extraReducers: {
    [getSlidersItems.fulfilled]: (state, { payload }) => {
      state.sliderItems = payload;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.categories = payload;
    },
  },
});

export const { clearNewData } = dataSlice.actions;

export default dataSlice.reducer;
