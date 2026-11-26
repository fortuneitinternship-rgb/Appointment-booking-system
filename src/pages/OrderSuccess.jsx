import { Link } from 'react-router-dom';
import './OrderSuccess.css';

function OrderSuccess() {

    return (

        <div className="success-page">

            <div className="success-box">

                <h1>🎉 Order Placed Successfully!</h1>

                <h2>Thank You for Shopping with FurniMart!</h2>

                <p>
                    Your order has been placed successfully.
                </p>

                <p>
                    We will deliver your furniture soon.
                </p>

                <Link to="/product">
                    Continue Shopping
                </Link>

            </div>

        </div>

    );

}

export default OrderSuccess;