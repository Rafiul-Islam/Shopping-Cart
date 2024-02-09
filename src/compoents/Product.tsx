import ProductModel from "../models/Product.ts";
import {FaRegStar} from "react-icons/fa";

const Product = ({product: {name, image, price, fastDelivery}}: { product: ProductModel }) => {

    const generateRandomDay = () => {
        const days = parseInt(Math.random() * 5);
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
                    <FaRegStar className='ms-1'/>
                    <FaRegStar className='ms-1'/>
                    <FaRegStar className='ms-1'/>
                    <FaRegStar className='ms-1'/>
                    <FaRegStar className='ms-1'/>
                </div>
                <button type='button' className="btn btn-primary add-to-cart-btn">Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;
