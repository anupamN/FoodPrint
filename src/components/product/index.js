import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Product = ({
  product = '', 
  rating
}) => {
  return (
    <Card>
      <CardContent>
        <div>Product Name: {product}</div>
        <div>Rating: {rating}</div>
      </CardContent>
    </Card>
  );
}

export default Product;