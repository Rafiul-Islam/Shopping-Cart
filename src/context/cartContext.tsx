import React, {createContext, ReactNode, useState} from "react";

interface ContextType {
    cart: Object[],
    setCart: React.Dispatch<React.SetStateAction<Object[]>>
}

export const Cart = createContext<ContextType | null>(null);

const CartContextProvider = ({children}: { children: ReactNode }) => {
    const [cart, setCart] = useState<Object[]>([]);

    return (
        <Cart.Provider value={{cart, setCart}}>
            {children}
        </Cart.Provider>
    )
}

export default CartContextProvider;
