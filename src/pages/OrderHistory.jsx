import { useState, useEffect } from 'react';
import './OrderHistory.css';

function OrderHistory() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        const savedOrders =
            JSON.parse(localStorage.getItem("orders")) || [];

        setOrders(savedOrders);

    }, []);

    return (

        <div className="orders-page">

            <h1>My Orders</h1>

            {orders.length === 0 ? (

                <h2>No Orders Found!</h2>

            ) : (

                orders.map((order) => (

                    <div className="order-card" key={order.id}>

                        <div className="order-header">

                            <h3>Order ID: {order.id}</h3>

                            <span>{order.status}</span>

                        </div>

                        <p>
                            <strong>Order Date:</strong>
                            {' '}{order.orderDate}
                        </p>

                        {order.items.map((item) => (

                            <div
                                className="order-product"
                                key={`${order.id}-${item.id}`}
                            >

                                <img
                                    src={item.image}
                                    alt={item.name}
                                />

                                <div>

                                    <h3>{item.name}</h3>

                                    <p>Price: ₹{item.price}</p>

                                    <p>
                                        Quantity: {item.quantity}
                                    </p>

                                    <p>
                                        Subtotal: ₹
                                        {item.price * item.quantity}
                                    </p>

                                </div>

                            </div>

                        ))}

                        <h3>
                            Total Price: ₹
                            {order.totalPrice.toLocaleString('en-IN')}
                        </h3>

                    </div>

                ))

            )}

        </div>

    );

}

export default OrderHistory;