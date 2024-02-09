import Product from "./Product.tsx";
import {cartState} from "../context/cartContext.tsx";
import ProductModel from "../models/Product.ts";

const Products = () => {
    // @ts-ignore
    const {state: {products}} = cartState();
    console.log(products);
    return (
        <div className='row'>
            {products.map((product: ProductModel) => (
                <div key={product.id} className='col-xl-3 col-lg-4 col-md-6'>
                    <Product  product={product} />
                </div>
            ))}
        </div>
    );
};

export default Products;
