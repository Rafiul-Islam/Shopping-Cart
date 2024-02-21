import Product from "../models/Product.ts";
import RatingFilter from "./RatingFilter.tsx";
import {FaTrash} from "react-icons/fa6";
import {CHANGE_ITEM_QUANTITY, REMOVE_FROM_CART} from "../context/type.ts";
import React, {FormEvent, useState} from "react";

interface PropsType {
    product: Product,
    dispatch: React.DispatchWithoutAction
}

const CartItem = ({product, dispatch}: PropsType) => {
    const {name, image, price, rating, qty, inStock} = product;
    const [quantity, setQuantity] = useState(qty);
    const handleDeleteFromCart = (product: Product) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        dispatch({
            type: REMOVE_FROM_CART,
            payload: product
        })
    }

    const handleProductQuantity = (e:FormEvent) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        dispatch({
            type: CHANGE_ITEM_QUANTITY,
            payload: {
                product,
                qty: e.target.value
            }
        })
    }

    return (
        <div className='cart-item mb-3 p-4 border rounded d-flex justify-content-between flex-wrap align-items-start' style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <div className='d-flex align-items-center'>
                <img width='120' height='80' style={{borderRadius: '6px', objectFit: "cover"}} src={image} alt={name}/>
                <div className='ms-2'>
                    <h5 className='cart-item__name mb-1'>{name}</h5>
                    <p className='cart-item__price mb-0 fw-bolder'>${price}</p>
                    <RatingFilter rating={rating} style={{pointerEvents: 'none'}}/>
                </div>
            </div>
            <div className='d-flex align-items-center ms-5'>
                <label className='me-2 fw-bolder'>Quantity:</label>
                <select defaultValue={quantity} onChange={(e) => handleProductQuantity(e)} className='form-control me-4' style={{minWidth: "100px"}}>
                    {
                        [...Array(inStock)].map((_, i) =>
                            <option key={i} value={i + 1}>
                                {i + 1}
                            </option>
                        )
                    }
                </select>
                <FaTrash
                    onClick={() => handleDeleteFromCart(product)}
                    size={35}
                    role='button'
                    className='text-danger'
                />
            </div>
        </div>
    );
};

export default CartItem;
