import ProductModel from "../models/Product.ts";
import RatingFilter from "./RatingFilter.tsx";
import {cartState} from "../context/cartContext.tsx";
import {ADD_TO_CART, REMOVE_FROM_CART} from "../context/type.ts";

const Product = ({product}: { product: ProductModel }) => {
    const {id, name, image, price, fastDelivery, rating, inStock} = product;
    const generateRandomDay = (): number => {
        const days = parseInt(String(Math.random() * 5));
        return days > 1 ? days : generateRandomDay();
    }

    // @ts-ignore
    const {state: {cart}, dispatch} = cartState();

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
                        handleClick={() => {
                        }}
                        style={{cursor: "default", pointerEvents: "none"}}
                    />
                </div>
                {
                    cart.some((item: { id: string }) => item.id === id) ? (
                        <button onClick={() => dispatch({
                            type: REMOVE_FROM_CART,
                            payload: product
                        })} type='button' className="btn btn-primary remove-from-cart-btn">
                            Remove From Cart
                        </button>
                    ) : (
                        <button onClick={() => dispatch({
                            type: ADD_TO_CART,
                            payload: product
                        })} disabled={inStock === 0} type='button' className="btn btn-primary add-to-cart-btn">
                            {inStock === 0 ? 'Out Of Stock' : 'Add To Cart'}
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default Product;
