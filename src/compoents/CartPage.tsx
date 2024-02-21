import {cartState} from "../context/cartContext.tsx";
import CartList from "./CartList.tsx";
import CheckoutPage from "./CheckoutPage.tsx";

const CartPage = () => {
    return (
        <div className='row'>
            <section className='col-md-7 col-lg-8 col-xl-9'>
                <CartList/>
            </section>
            <section className='col-md-5 col-lg-4 col-xl-3 bg-light'>
                <CheckoutPage/>
            </section>

        </div>
    );
};

export default CartPage;
