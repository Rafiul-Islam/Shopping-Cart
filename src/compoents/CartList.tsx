import CartItem from "./CartItem.tsx";
import Product from "../models/Product.ts";
import {cartState} from "../context/cartContext.tsx";

const CartList = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const {state: {cart}, dispatch}  = cartState();
    return (
        <section className='cart-container'>
            {cart.length === 0 && <h5 className='text-danger'>No items is added to cart!</h5>}
            {cart.length > 0 && cart.map((c:Product) => <CartItem key={c.id} product={c} dispatch={dispatch}/>)}
        </section>
    );
};

export default CartList;
