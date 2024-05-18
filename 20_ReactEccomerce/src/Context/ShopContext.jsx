import React, { createContext } from 'react';
import allProducts from '../components/Assets/all_product';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { allProducts }; // Renamed to allProducts

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
