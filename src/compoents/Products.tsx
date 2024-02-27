import Product from "./Product.tsx";
import {cartState} from "../context/cartContext.tsx";
import ProductModel from "../models/Product.ts";
import {SORT_BY_ASC_ORDER, SORT_BY_DESC_ORDER} from "../context/type.ts";

const Products = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const {state: {products}, filterState: {sort, byStock, byFastDelivery, byRating, searchQuery}} = cartState();
    const handleProductFiltering = () => {
        let filteredProduct = [...products];
        if (sort === SORT_BY_ASC_ORDER) {
            filteredProduct.sort((a, b) => Number(a.price) - Number(b.price))
        }
        if (sort === SORT_BY_DESC_ORDER) {
            filteredProduct.sort((a, b) => Number(b.price) - Number(a.price))
        }
        if (byStock) {
            filteredProduct = filteredProduct.filter(item => item.inStock);
        }
        if (byFastDelivery) {
            filteredProduct = filteredProduct.filter(item => item.fastDelivery);
        }
        if (byRating) {
            filteredProduct = filteredProduct.filter(item => item.rating === byRating);
        }
        if (searchQuery) {
            filteredProduct = filteredProduct.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        return filteredProduct;
    }

    return (
        <div className='row'>
            {handleProductFiltering().map((product: ProductModel) => (
                <div key={product.id} className='col-xl-3 col-lg-4 col-md-6'>
                    <Product product={product}/>
                </div>
            ))}
        </div>
    );
};

export default Products;
