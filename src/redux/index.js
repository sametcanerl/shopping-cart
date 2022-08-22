import { createStore, combineReducers } from "redux";

import productCounterReducer from "./reducers/productCounterReducers";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  cartReducer: cartReducer,
  productCounterReducer: productCounterReducer,
});

export const getStore = () => {
  const store = createStore(rootReducer);
  return store;
};
