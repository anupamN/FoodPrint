import React from 'react';

const Product = ({
  product = '', 
  rating
}) => {
  return (
    <div>
      <div>Product Name: {product}</div>
      <div>Rating: {rating}</div>
    </div>
  );
}

export default Product;