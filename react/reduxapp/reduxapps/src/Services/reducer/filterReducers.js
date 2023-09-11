import { ADD_TO_CART, REMOVE_TO_CART } from "../Constants"

const  initialState = {
  cartArray:[]
}

export default function cartItems(state=[], action){
  switch(action.type){
       case ADD_TO_CART:
       return[
        ...state,
        {cartData:action.data}
       ]
       break;

       case REMOVE_TO_CART:
          state.pop()
       return[
          ...state,
        ]
        break;
       default :
       return state
  }
}