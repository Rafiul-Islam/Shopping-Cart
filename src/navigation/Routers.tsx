import {Route, Routes} from "react-router-dom";
import Home from "../compoents/Home.tsx";
import PageNotFound from "../compoents/PageNotFound.tsx";

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/*' element={<PageNotFound/>}></Route>
        </Routes>
    );
};

export default Routers;
