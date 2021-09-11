import React from 'react';

const ProductDetailCard = (props = {}) => {

  const { product } = props;

  return (
    <div style={{ backgroundColor: '#C4C4C4' }} className="d-flex flex-row justify-content-between p-4">
      <img src={product.imgUrl} alt={product.name} style={{ width: '400px', height: '400px' }} />
      <div>
        <p>{product.name}</p>
        <p>{product.binomialName}</p>
        <p>{product.price}€</p>
        <p>wateringsPerWeek: {product.wateringsPerWeek}</p>
        <p>fertilizerType: {product.fertilizerType}</p>
        <p>heightInCm: {product.heightInCm}</p>
      </div>
    </div>
  );
}

export default ProductDetailCard;
