import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e) {
        e.preventDefault();

        if (email && password) {
            alert("Login Successful!");
            navigate('/');
        }
    }

    return (
        <div className="login-page">

            <div className="login-container">

                <div className="login-image">
                    <h1>Welcome to FurniMart</h1>
                    <p>Make Your Home Beautiful With Our Furniture.</p>
                </div>

                <div className="login-form">

                    <h1>Login</h1>

                    <p>Welcome back! Please login to your account.</p>

                    <form onSubmit={handleLogin}>

                        <label>Email Address</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <div className="login-options">
                            <label>
                                <input type="checkbox" />
                                Remember Me
                            </label>

                            <a href="#forgot">Forgot Password?</a>
                        </div>

                        <button type="submit">
                            Login
                        </button>

                    </form>

                    <p className="register-link">
                        Don't have an account?
                        <Link to="/register"> Register</Link>
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Login;