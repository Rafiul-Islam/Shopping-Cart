import React, {createContext, ReactNode, useState} from "react";
import Product from "../models/Product.ts";
import generateProducts from "../utils/products.ts";

interface ContextType {
    cart: Object[],
    setCart: React.Dispatch<React.SetStateAction<Object[]>>,
    products: Product[],
}

export const Cart = createContext<ContextType | null>(null);

const CartContextProvider = ({children}: { children: ReactNode }) => {
    const [cart, setCart] = useState<Object[]>([]);
    // @ts-ignore
    const [products, setProducts] = useState<Product[]>(generateProducts);

    return (
        <Cart.Provider value={{products, cart, setCart}}>
            {children}
        </Cart.Provider>
    )
}

export default CartContextProvider;
