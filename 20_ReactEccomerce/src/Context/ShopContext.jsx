import React, { createContext, useState } from 'react';
import allProducts from '../components/Assets/all_product';

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < allProducts.length; index++) {
    cart[index] = 0;
    
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())
  const contextValue = { allProducts,cartItems }; // Renamed to allProducts

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
