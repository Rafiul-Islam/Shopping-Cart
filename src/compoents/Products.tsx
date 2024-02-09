import Product from "./Product.tsx";
import {cartState} from "../context/cartContext.tsx";
import ProductModel from "../models/Product.ts";

const Products = () => {
    // @ts-ignore
    const {state: {products}} = cartState();
    console.log(products);
    return (
        <div>
            {products.map((product: ProductModel) => <Product product={product} />)}
        </div>
    );
};

export default Products;
