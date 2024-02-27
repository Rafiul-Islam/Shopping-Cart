import React, {createContext, ReactNode, useContext, useReducer} from "react";
import generateProducts from "../utils/products.ts";
import cartReducer from "./cartReducer.ts";
import filterReducer from "./filterReducer.ts";

interface ValueType {
    state: never;
    dispatch: React.DispatchWithoutAction;
    filterState: never,
    filterDispatch: React.DispatchWithoutAction;
}

interface UseReducerType {
    state: (state: number | undefined, action: never) => number,
    dispatch: React.DispatchWithoutAction,
    filterState: (state: number | undefined, action: never) => number,
    filterDispatch: React.DispatchWithoutAction;
}

const CartContext = createContext<ValueType | null>(null);

// eslint-disable-next-line react-hooks/rules-of-hooks,react-refresh/only-export-components
export const cartState = () => useContext(CartContext);

const CartContextProvider = ({children}: { children: ReactNode }) => {
    const products = generateProducts();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const [state, dispatch] = useReducer<UseReducerType | never>(cartReducer, {
        products: products,
        cart: []
    });

    const [filterState, filterDispatch] = useReducer(filterReducer, {
        sort: "",
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return (
        <CartContext.Provider value={{state, dispatch, filterState, filterDispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
