import {Route, Routes} from "react-router-dom";
import Home from "../compoents/Home.tsx";
import PageNotFound from "../compoents/PageNotFound.tsx";
import CartPage from "../compoents/CartPage.tsx";

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/cart' element={<CartPage/>}></Route>
            <Route path='/*' element={<PageNotFound/>}></Route>
        </Routes>
    );
};

export default Routers;
