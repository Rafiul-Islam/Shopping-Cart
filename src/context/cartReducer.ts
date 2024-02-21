import {ADD_TO_CART, REMOVE_FROM_CART, CHANGE_ITEM_QUANTITY} from "./type.ts";


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
        case CHANGE_ITEM_QUANTITY:
            return {
                ...state,
                cart: [...state.cart.map((item: { id: string, qty: number }) => {
                    if (item.id === action.payload.product.id) {
                        item.qty = parseInt(action.payload.qty);
                    }
                    return item;
                })]
            }
        default:
            return state;
    }
}

export default cardReducer;
