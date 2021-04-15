import React, { createContext, useState } from "react";
import { productData } from "../utils/data";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{ productData }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
