import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import './Cart.css';
function Cart() {

    const { cart, removeFromCart, totalPrice } = useCart();

    return (

        <div className="cart-page">

            <h1>My Shopping Cart</h1>

            {cart.length === 0 ? (

                <div>
                    <h2>Your Cart is Empty!</h2>
                    <Link to="/product">Continue Shopping</Link>
                </div>

            ) : (

                <div className="cart-container">

                    {cart.map((item) => (

                        <div className="cart-item" key={item.id}>

                            <img
                                src={item.image}
                                alt={item.name}
                                width="150"
                            />

                            <div>
                                <h2>{item.name}</h2>

                                <p>Price: ₹{item.price}</p>

                                <p>Quantity: {item.quantity}</p>

                                <p>
                                    Subtotal: ₹{item.price * item.quantity}
                                </p>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>

                            </div>

                        </div>

                    ))}

                    <h2>
                        Total Price: ₹{totalPrice.toLocaleString('en-IN')}
                    </h2>

                 <Link to="/checkout" className="checkout-btn"> Proceed to Checkout</Link>
                </div>

            )}

        </div>

    );

}

export default Cart;