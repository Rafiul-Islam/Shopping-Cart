import {ADD_TO_CART, REMOVE_FROM_CART} from "./type.ts";


const cardReducer = (state: any, action: any) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [
                    ...state.cart,
                    {
                        ...action.payload,
                        qty: 1
                    }
                ]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item: { id: string }) => item.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default cardReducer;
