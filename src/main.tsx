import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import CartContext from "./context/cartContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
       <CartContext>
           <App />
       </CartContext>
    </BrowserRouter>
)
