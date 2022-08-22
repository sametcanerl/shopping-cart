import { DECREMENT, INCREMENT } from "../types/productCounterTypes";

const initialState={
    counter : 1 ,
};


const productCounterReducer = (state = initialState,action)=>{
    switch (action.type) {
        case INCREMENT:
            return{counter:state.counter + 1 }
        case DECREMENT:
            return{counter:state.counter - 1 }
           
    
        default:
           return state;
    }
};

export default productCounterReducer;