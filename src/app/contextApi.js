"use client"

import React, { createContext, useEffect, useState } from 'react';

// Create the cart context
export const CartContext = createContext();

// Create the cart provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(data);
  }, [])

  // Add item to the cart
  const addItemToCart = (item) => {
    !cartItems?.some((item_data) => item_data.id === item.id) && setCartItems((prevData) => {
      let updatedData = [...prevData, item];
      localStorage.setItem("cartItems", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  // Remove item from the cart
  const removeItemFromCart = (itemId) => {

    setCartItems((prevData) => {
      const updatedData = prevData.filter((item) => item.id !== itemId);
      localStorage.setItem("cartItems", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const updateItem = (itemId, months) => {
    setCartItems((prevData) => {
      const updatedData = prevData.map((e) => (e.id === itemId ? { ...e, subscription_period: months } : e));
      localStorage.setItem("cartItems", JSON.stringify(updatedData));
      return updatedData;
    });

    // console.log(cartItems, JSON.parse(localStorage.getItem("cartItems")))
  };


  // Clear the cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  // Define the cart context value
  const cartContextValue = {
    cartItems,
    addItemToCart,
    updateItem,
    removeItemFromCart,
    clearCart,
  };

  // Provide the cart context value to the children components
  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
