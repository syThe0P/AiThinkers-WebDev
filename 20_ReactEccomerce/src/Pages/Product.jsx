import React, { useContext } from 'react';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import { useParams } from 'react-router-dom';
import { ShopContext } from "../Context/ShopContext";

const Product = () => {
  const { allProducts } = useContext(ShopContext);
  const  {productId}  = useParams();

  // Log productId to check its value
  console.log("hello pranav", productId);

  // Check if allProducts is null or undefined
console.log(allProducts);

  // Find the product by productId
  const product = allProducts.find((e) => e.id === Number(productId));

  // Log the found product
  console.log("product:", product);

  // If product is not found, display an error message
  if (!product) {
    return <div>Product not found</div>;
  }

  // If product is found, render the product details
  return (
    <div>
      <Breadcrum category={product.category} name={product.name} />
    </div>
  );
};

export default Product;
