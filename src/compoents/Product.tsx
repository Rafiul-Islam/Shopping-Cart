import ProductModel from "../models/Product.ts";
import RatingFilter from "./RatingFilter.tsx";

const Product = ({product: {name, image, price, fastDelivery, rating, inStock}}: { product: ProductModel }) => {

    const generateRandomDay = (): number => {
        const days = parseInt(String(Math.random() * 5));
        return days > 1 ? days : generateRandomDay();
    }

    return (
        <div className="card product-card">
            <img
                width='100%'
                height='200'
                style={{objectFit: "cover"}}
                src={image}
                loading='lazy'
                className="card-img-top"
                alt="A random Image"
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <strong className="card-text">
                    ${price}
                </strong>
                <br/>
                <strong className="card-text">
                    {fastDelivery ? 'Fast Delivery' : `${generateRandomDay()} days delivery`}
                </strong>
                <br/>
                <div className='mb-2'>
                    <RatingFilter
                        rating={rating}
                        handleClick={() => {}}
                        style={{cursor: "default", pointerEvents: "none"}}
                    />
                </div>
                <button disabled={inStock === 0} type='button' className="btn btn-primary add-to-cart-btn">
                    {inStock === 0 ? 'Out Of Stock': 'Add To Cart'}
                </button>
                <button type='button' className="btn btn-primary remove-from-cart-btn">Remove From Cart</button>
            </div>
        </div>
    );
};

export default Product;
