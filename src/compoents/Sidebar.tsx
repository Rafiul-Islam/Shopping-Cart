import React, {FormEvent, useState} from "react";
import RatingFilter from "./RatingFilter.tsx";
import {cartState} from "../context/cartContext.tsx";
import {
    FILTER_BY_FAST_DELIVERY,
    FILTER_BY_PRICE,
    FILTER_BY_RATING,
    FILTER_BY_STOCK,
    RESET_FILTERS, SORT_BY_ASC_ORDER, SORT_BY_DESC_ORDER
} from "../context/type.ts";

const Sidebar = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const {filterState: {sort, byStock, byFastDelivery, byRating}, filterDispatch} = cartState();

    const handleSorting = (e: React.FormEvent) => {
        filterDispatch({
            type: FILTER_BY_PRICE,
            payload: e.target.value
        });
    }

    const handleStockOut = () => {
        filterDispatch({
            type: FILTER_BY_STOCK,
        });
    }
    const handleFastDelivery = () => {
        filterDispatch({
            type: FILTER_BY_FAST_DELIVERY,
        });
    }

    const handleReset = () => {
        filterDispatch({
            type: RESET_FILTERS
        });
    }

    const handleRating = (index: number) => {
        filterDispatch({
            type: FILTER_BY_RATING,
            payload: index + 1
        });
    }

    return (
        <section className='sidebar sticky-top'>
            <form>
                <h5 className='mb-3 fst-italic'>Filter Products</h5>
                <div className='sort-view text-light'>
                    <label className='d-block' htmlFor="asc">
                        <input
                            className='me-2'
                            type="radio"
                            onChange={(e) => handleSorting(e)}
                            id='asc'
                            value={SORT_BY_ASC_ORDER}
                            checked={sort === SORT_BY_ASC_ORDER}
                        />
                        <small>Ascending</small>
                    </label>
                    <label className='my-2' htmlFor="desc">
                        <input
                            className='me-2'
                            type="radio"
                            onChange={(e) => handleSorting(e)}
                            id='desc'
                            value={SORT_BY_DESC_ORDER}
                            checked={sort === SORT_BY_DESC_ORDER}
                        />
                        <small>Descending</small>
                    </label>
                </div>
                <div className='filter text-light my-2'>
                    <label className='d-block' htmlFor="stockOut">
                        <input
                            className='me-2'
                            type="checkbox"
                            onChange={handleStockOut}
                            id='stockOut'
                            checked={byStock}
                        />
                        <small>Exclude Out Of Stock</small>
                    </label>
                </div>
                <div className='filter text-light my-2'>
                    <label htmlFor="fast">
                        <input
                            className='me-2'
                            type="checkbox"
                            onChange={handleFastDelivery}
                            id='fast'
                            checked={byFastDelivery}
                        />
                        <small>Fast Delivery</small>
                    </label>
                </div>
                <div className='filter text-light my-3'>
                    Rating &nbsp;
                    <RatingFilter rating={byRating} handleClick={handleRating}/>
                </div>
                <button onClick={handleReset} type='reset' className='btn w-100 bg-light text-dark mt-3'>
                    Reset All Filters
                </button>
            </form>
        </section>
    );
};

export default Sidebar;
