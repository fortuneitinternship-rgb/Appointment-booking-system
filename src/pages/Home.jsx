import './Home.css';

function Home() {

    const categories = [
        {
            name: "Sofas",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400"
        },
        {
            name: "Beds",
            image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400"
        },
        {
            name: "Dining",
            image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400"
        },
        {
            name: "Wardrobes",
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400"
        },
        {
            name: "Study Tables",
            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400"
        },
        {
            name: "TV Units",
            image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400"
        }
    ];

    return (

        <div className="home">

            {/* HERO SECTION */}

            <section className="hero">

                <div className="hero-content">

                    <h1>
                        Stylish Furniture
                        <br />
                        for <span>Your Home</span>
                    </h1>

                    <p>
                        Discover modern, comfortable and durable
                        <br />
                        furniture for every space.
                    </p>

                    <button>Shop Now →</button>

                </div>

            </section>


            {/* CATEGORY SECTION */}

            <section className="categories">

                <h2>Shop by Category</h2>

                <div className="category-container">

                    {categories.map((category, index) => (

                        <div className="category-card" key={index}>

                            <img
                                src={category.image}
                                alt={category.name}
                            />

                            <h3>{category.name}</h3>

                        </div>

                    ))}

                </div>

            </section>


            {/* ABOUT SECTION */}

            <section className="about" id="about">

                <div className="about-content">

                    <h2>About</h2>

                    <p>
                        FurniMart is your trusted place for modern,
                        stylish and affordable furniture for every home.
                        We offer quality products, a wide range of
                        designs and a smooth shopping experience.
                    </p>

                    <div className="features">

                        <div>
                            <h3>🛡️</h3>
                            <p>Quality<br />Furniture</p>
                        </div>

                        <div>
                            <h3>🚚</h3>
                            <p>Safe<br />Delivery</p>
                        </div>

                        <div>
                            <h3>◉</h3>
                            <p>Customer<br />Support</p>
                        </div>

                    </div>

                </div>

                <div className="about-image">

                    <img
                        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800"
                        alt="Beautiful furniture interior"
                    />

                </div>

            </section>


            {/* CONTACT SECTION */}

            <section className="contact" id="contact">

                <h2>Contact</h2>

                <div className="contact-info">

                    <p>☎ +91 98765 43210</p>

                    <p>✉ support@furnimart.com</p>

                    <p>📍 Hyderabad, India</p>

                </div>

            </section>

        </div>

    );

}

export default Home;