import React, { createContext, useState } from "react";

export const CartContext =  createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState( [] );

    const addToCart = (item, cantidad) => {

        setCart(prevCart => {
            const existenteItem = prevCart.findIndex(cartItem => cartItem.id === item.id );
            if (existenteItem !== -1) {
                const actualizarCart = [...prevCart];
                actualizarCart[existenteItem].cantidad += cantidad
                return actualizarCart;
            }
            return [...prevCart, {...item, cantidad}];
        })

    };

    const removerItem = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id))
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removerItem }}>
            { children }
        </CartContext.Provider>
    )

};