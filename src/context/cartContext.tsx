import React, {createContext, ReactNode, useContext, useReducer} from "react";
import generateProducts from "../utils/products.ts";
import cartReducer from "./cartReducer.ts";

interface ValueType {
    state: any;
    dispatch: React.DispatchWithoutAction;
}

interface UseReducerType {
    state: (state: number | undefined, action: any) => number,
    dispatch: React.DispatchWithoutAction
}

const CartContext = createContext<ValueType | null>(null);
// @ts-ignore
export const cartState = () => useContext(CartContext);

const CartContextProvider = ({children}: { children: ReactNode }) => {
    const products = generateProducts();
    const [state, dispatch] = useReducer<UseReducerType | any>(cartReducer, {
        products: products,
        cart: []
    });

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
