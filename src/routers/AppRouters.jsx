import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import Checkout from '../pages/Checkout';

import Home from '../pages/Home'
import Product from '../pages/Product'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import OrderSuccess from '../pages/OrderSuccess';
import OrderHistory from '../pages/OrderHistory';

function AppRouters() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/order-success" element={<OrderSuccess />} />
                    <Route path="/my-orders"  element={<OrderHistory />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRouters;