import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    // Add product
    const addToCart = (product, quantity) => {
        setCart((prevCart) => {

            const existingProduct = prevCart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + quantity
                        }
                        : item
                );
            }

            return [...prevCart, { ...product, quantity }];
        });
    };

    // Remove product
    const removeFromCart = (id) => {
        setCart((prevCart) =>
            prevCart.filter((item) => item.id !== id)
        );
    };

    // Total items
    const totalItems = cart.reduce(
        (total, item) => total + item.quantity, 0
    );

    // Total price
    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );

    // Clear entire cart
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            totalItems,
            totalPrice,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}