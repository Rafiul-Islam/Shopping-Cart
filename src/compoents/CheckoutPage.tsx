import {cartState} from "../context/cartContext.tsx";
import Product from "../models/Product.ts";

const CheckoutPage = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const {state: {cart}} = cartState();
    return (
        <section className='text-light p-4 rounded-3' style={{background: "#104c81", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <h4>SubTotal ({cart.length}) Items</h4>
            <p className='fw-bolder'>Total Price: ${cart.reduce((a:number, c:Product) => a + parseInt(c.price), 0)}</p>
            <button type='button' className='btn btn-light w-100'>Proceed To Checkout</button>
        </section>
    );
};

export default CheckoutPage;
