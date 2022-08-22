import { DECREMENT, INCREMENT } from "../types/productCounterTypes";

export const increment = ()=> ({type:INCREMENT})
export const decrement = ()=> ({type:DECREMENT})