import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

function Checkout() {

  
    const { cart, totalPrice, clearCart } = useCart();

    const navigate = useNavigate();

  
    function handleOrder(e) {

        e.preventDefault();

        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        const existingOrders =
            JSON.parse(localStorage.getItem("orders")) || [];

        const newOrder = {
            id: Date.now(),
            items: cart,
            totalPrice: totalPrice,
            orderDate: new Date().toLocaleString(),
            status: "Pending"
        };

      
        localStorage.setItem(
            "orders",
            JSON.stringify([newOrder, ...existingOrders])
        );

     
        clearCart();

        alert("Order placed successfully!");

        navigate('/order-success');
    }

    return (
        <div className="checkout-page">

            <h1>Checkout</h1>

            <form onSubmit={handleOrder}>

                <h2>Delivery Information</h2>

                <input
                    type="text"
                    placeholder="Full Name"
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    required
                />

                <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                />

                <textarea
                    placeholder="Address"
                    required
                />

                <input
                    type="text"
                    placeholder="City"
                    required
                />

                <input
                    type="text"
                    placeholder="Pincode"
                    required
                />

                <h2>Order Summary</h2>

                {cart.map((item) => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>
                            ₹{item.price} × {item.quantity}
                        </p>
                    </div>
                ))}

                <h2>Total: ₹{totalPrice.toLocaleString('en-IN')}</h2>

                <button type="submit">
                    Place Order
                </button>

            </form>

        </div>
    );
}

export default Checkout;