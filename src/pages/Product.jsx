import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

function Product() {

    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');

    const products = [
        {
            id: 1,
            name: 'Modern Sofa',
            category: 'Sofas',
            price: 15000,
            image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500'
        },
        {
            id: 2,
            name: 'Luxury Bed',
            category: 'Beds',
            price: 25000,
            image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500'
        },
        {
            id: 3,
            name: 'Dining Table',
            category: 'Dining',
            price: 18000,
            image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500'
        },
        {
            id: 4,
            name: 'Comfortable Chair',
            category: 'Chairs',
            price: 5000,
            image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=500'
        },
        {
            id: 5,
            name: 'Wooden Sofa',
            category: 'Sofas',
            price: 20000,
            image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?w=500'
        },
        {
            id: 6,
            name: 'Study Table',
            category: 'Tables',
            price: 8000,
            image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500'
        }
    ];

    const filteredProducts = products.filter((product) => {

        const matchSearch = product.name.toLowerCase()
            .includes(search.toLowerCase());

        const matchCategory =
            category === 'All' || product.category === category;

        return matchSearch && matchCategory;
    });

    return (

        <div className="products-page">

            <h1>Our Furniture Collection</h1>

            <p className="product-subtitle">
                Discover beautiful furniture for your home
            </p>

            {/* Search */}

            <input
                type="text"
                placeholder="Search furniture..."
                className="product-search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Categories */}

            <div className="filter-buttons">

                {['All', 'Sofas', 'Beds', 'Dining', 'Chairs', 'Tables'].map((item) => (

                    <button
                        key={item}
                        className={category === item ? 'active' : ''}
                        onClick={() => setCategory(item)}
                    >
                        {item}
                    </button>

                ))}

            </div>

            {/* Products */}

            <div className="products-container">

                {filteredProducts.length > 0 ? (

                    filteredProducts.map((product) => (

                        <div className="product-card" key={product.id}>

                            <img
                                src={product.image}
                                alt={product.name}
                            />

                            <div className="product-info">

                                <h3>{product.name}</h3>

                                <p>₹{product.price.toLocaleString('en-IN')}</p>

                                <Link to={`/product/${product.id}`}>
                                    <button>View Details</button>
                                </Link>

                            </div>

                        </div>

                    ))

                ) : (

                    <h2>No Products Found</h2>

                )}

            </div>

        </div>

    );

}

export default Product;