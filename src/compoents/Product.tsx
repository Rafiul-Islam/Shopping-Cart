import ProductModel from "../models/Product.ts";

const Product = ({product: {name}}: { product: ProductModel }) => {
    return (
        <p className='mb-0'>{name}</p>
    );
};

export default Product;
