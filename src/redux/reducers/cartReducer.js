import { ADD_CART, REMOVE_CART } from "../types/cartTypes";

const initialState = {
  cartList: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CART:
      return {
        cartList: [...state.cartList, { img: payload.img,id:payload.id }],
      };
    case REMOVE_CART:
      const newList = state.cartList?.filter((cart) => payload !== cart.id);
     
      return {
        ...state,
        cartList: newList,
      };

    default:
     return state;
  }
};

export default cartReducer;
