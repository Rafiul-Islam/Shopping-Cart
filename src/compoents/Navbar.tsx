import {FaCartPlus} from "react-icons/fa6";
import {NavLink} from "react-router-dom";
import {cartState} from "../context/cartContext.tsx";
import {FaTrash} from "react-icons/fa6";
import {FILTER_BY_SEARCH, REMOVE_FROM_CART} from "../context/type.ts";
import Product from "../models/Product.ts";
import {FormEvent} from "react";

const Navbar = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const {state: {cart}, dispatch,filterState: {searchQuery} , filterDispatch} = cartState();

    const handleSearch = (e: FormEvent) => {
        filterDispatch({
            type: FILTER_BY_SEARCH,
            payload: e.target.value
        })
    }

    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-success py-3">
            <div className="container-fluid">
                <NavLink className='text-decoration-none' to="/">
                    <h4 className="text-white mb-0">Sopping Cart</h4>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">

                        </li>
                    </ul>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={handleSearch}
                            value={searchQuery}
                        />
                        <div className='btn-group bg-light ms-4'>
                            <button type="button" className="btn btn-light px-4 py-2 rounded dropdown-toggle"
                                    data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                <FaCartPlus size='21'/>
                                <strong className='ms-2 me-3'>{cart.length}</strong>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start py-0 shadow-lg rounded-0"
                                aria-labelledby="navbarDropdown">
                                {
                                    cart.length === 0 &&
                                    <li className='dropdown-item p-3 text-danger'>
                                        No Item Found!
                                    </li>
                                }
                                {
                                    cart.length > 0 && cart.map((item: Product) =>
                                        <li key={item.id} className='dropdown-item border-bottom p-3'>
                                            <div className='d-flex justify-content-between'>
                                                <div className='me-5 d-flex align-items-center'>
                                                    <img
                                                        width='40'
                                                        height='40'
                                                        style={{objectFit: "cover", borderRadius: '100%'}}
                                                        src={item.image}
                                                        alt={item.name}
                                                    />
                                                    <div className='ms-2'>
                                                        <small>
                                                            <p className='mb-0 text-nowrap fw-bolder'>{item.name}</p>
                                                            <strong>$</strong>{item.price}
                                                        </small>
                                                    </div>
                                                </div>
                                                <div>
                                                    <FaTrash onClick={() => dispatch({
                                                        type: REMOVE_FROM_CART,
                                                        payload: item
                                                    })}
                                                             role='button'
                                                             className='text-danger'
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }
                                {
                                    cart.length > 0 &&
                                    <NavLink to='/cart'>
                                        <button className='btn btn-success rounded-0 w-100'>Go To Cart</button>
                                    </NavLink>
                                }
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
