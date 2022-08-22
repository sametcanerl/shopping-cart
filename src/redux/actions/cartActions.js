import { ADD_CART, REMOVE_CART } from "../types/cartTypes";

export const addCart = (payload) => {
    return { type: ADD_CART, payload: payload };
  };
export const removeCart = (payload) => {
    return { type: REMOVE_CART, payload: payload };
  };