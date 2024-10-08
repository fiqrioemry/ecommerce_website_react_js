import React, { createContext, useState, useEffect, Children } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ Children }) => {
  // product state
  const [products, setProducts] = useState([]);

  //   fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch();
    };
  });
  return (
    <ProductContext.ProductProvider>{Children}</ProductContext.ProductProvider>
  );
};

export default ProductContext;
