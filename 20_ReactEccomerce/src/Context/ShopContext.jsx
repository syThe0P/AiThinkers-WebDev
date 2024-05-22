import React, { createContext, useState, useEffect } from "react";
import allProducts from "../components/Assets/all_product.js";
import CartItems from "../components/CartItems/CartItems.jsx";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < allProducts.length; index++) {
    cart[allProducts[index].id] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 0) {
        updatedCart[itemId] - 1;
      }
      return updatedCart;
    });
  };
  const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item] > 0){
        let itemInfo = allProducts.find((product) => product.id === Number(item))
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  }

  const getTotalCartItems =()=>{
    let totalItem = 0;
    for(const item in cartItems){
      if(cartItems[item] > 0){
        totalItem += CartItems[item]
      }
    }
    return totalItem;
  }

  // Log cartItems whenever it changes
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = { allProducts, cartItems, addToCart, removeFromCart,getTotalCartAmount,getTotalCartItems };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

// import React, { createContext, useState } from "react";
// import allProducts from "../components/Assets/all_product";

// export const ShopContext = createContext(null);
// const getDefaultCart = () => {
//   let cart = {};
//   for (let index = 0; index < allProducts.length + 1; index++) {
//     cart[index] = 0;
//   }
//   return cart;
// };

// const ShopContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState(getDefaultCart());

//   const addToCart = (itemId) =>{
//     setCartItems((prev) => ({...prev,[itemId]:prev[itemId] + 1}))
//     console.log(cartItems)
//   }
//   const removeFromCart = (itemId) =>{
//     setCartItems((prev) => ({...prev,[itemId]:prev[itemId] - 1}))
//   }

//   const contextValue = { allProducts, cartItems, addToCart, removeFromCart }; // Renamed to allProducts

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;
