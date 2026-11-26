import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import products from '../Data/Products';
import { useCart } from '../context/CartContext.jsx';
import './ProductDetails.css';

function ProductDetails() {

    const { id } = useParams();

    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useCart();

    const navigate = useNavigate();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return <h2>Product Not Found</h2>;
    }

    // Add to Cart function
    function handleAddToCart() {

        addToCart(product, quantity);

        alert("Product added to cart!");

        navigate('/cart');

    }

    return (

        <div className="details-page">

            <div className="details-image">

                <img src={product.image} alt={product.name} />

            </div>

            <div className="details-content">

                <h1>{product.name}</h1>

                <h3>⭐ {product.rating} / 5</h3>

                <h2>
                    ₹{product.price.toLocaleString('en-IN')}
                </h2>

                <p>{product.description}</p>

                <p>
                    <strong>Category:</strong> {product.category}
                </p>

                <p>
                    <strong>Colour:</strong> {product.color}
                </p>

                <div className="quantity">

                    <button
                        onClick={() =>
                            setQuantity(Math.max(1, quantity - 1))
                        }
                    >
                        -
                    </button>

                    <span>{quantity}</span>

                    <button
                        onClick={() => setQuantity(quantity + 1)}
                    >
                        +
                    </button>

                </div>

                <button
                    className="add-cart"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>

                <br /><br />

                <Link to="/product">
                    ← Back to Products
                </Link>

            </div>

        </div>

    );

}

export default ProductDetails;