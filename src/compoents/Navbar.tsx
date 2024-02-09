import { FaCartPlus } from "react-icons/fa6";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-success py-3">
            <div className="container-fluid">
                <NavLink className='text-decoration-none' to="/">
                    <h4 className="text-white mb-0" >Sopping Cart</h4>
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
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <div className='btn-group bg-light ms-4'>
                            <button type="button" className="btn btn-light px-4 py-2 rounded dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                <FaCartPlus size='21' />
                                <strong className='ms-2 me-3'>0</strong>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start py-0"
                                aria-labelledby="navbarDropdown">
                                <li className='dropdown-item p-3 text-danger'>
                                    No Item Found!
                                </li>
                                {/*<li className='dropdown-item p-3'>*/}
                                {/*    <div className='d-flex justify-content-between'>*/}
                                {/*        <p className='mb-0 me-5'>Product Name</p>*/}
                                {/*        <strong>2</strong>*/}
                                {/*    </div>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
