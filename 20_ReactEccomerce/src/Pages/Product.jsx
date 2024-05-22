import React, { useContext } from 'react';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import { useParams } from 'react-router-dom';
import { ShopContext } from "../Context/ShopContext";
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { allProducts } = useContext(ShopContext);
  const  {productId}  = useParams();

  // Find the product by productId
  const product = allProducts.find((e) => e.id === Number(productId));



  return (
    <div>
      <Breadcrum category={product.category} name={product.name} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts />
    </div>
  );
};

export default Product;
