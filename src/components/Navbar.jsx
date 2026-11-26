import { Link } from 'react-router-dom';
import './Navbar.css';
import { useCart } from '../context/CartContext.jsx';

function Navbar() {

    const { totalItems } = useCart();

    return (

        <nav className="navbar">

            <div className="nav-logo">

                <h2>🪑 FurniMart</h2>

                <span>Furniture Store</span>

            </div>

            <div className="nav-links">

                <Link to="/">Home</Link>
                <Link to="/product">Products</Link>
                <Link to="/my-orders">My Orders</Link>

                <a href="/#about">About</a>

                <a href="/#contact">Contact</a>

            </div>

            <div className="nav-actions">

                <input
                    type="text"
                    placeholder="🔍 Search furniture..."
                />

                <Link to="/login" className="login-btn">
                    ♙ Login
                </Link>

                <Link to="/cart" className="cart-btn">
                    🛒 <span>{totalItems}</span>
                </Link>

            </div>

        </nav>

    );

}

export default Navbar;