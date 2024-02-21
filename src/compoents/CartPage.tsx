import {cartState} from "../context/cartContext.tsx";
import CartList from "./CartList.tsx";

const CartPage = () => {
    return (
        <div className='row'>
            <section className='col-md-8 col-lg-9 col-xl-10 pe-0'>
                <CartList/>
            </section>
            <section className='col-md-4 col-lg-3 col-xl-2 ps-0 bg-light'>
                checkout bill
            </section>

        </div>
    );
};

export default CartPage;
