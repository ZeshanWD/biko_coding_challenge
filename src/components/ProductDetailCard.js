import React from 'react';

const ProductDetailCard = (props = {}) => {

  const { product } = props;

  return (
    <div style={{ backgroundColor: 'rgba(0,0,0,0.1)' }} className="d-flex flex-row p-4">
      <img src={product.imgUrl} alt={product.name} style={{ width: '450px', height: '400px' }} />
      <div style={{ marginLeft: '100px', textAlign: 'left' }}>
        <h1>{product.name}</h1>
        <h4>{product.binomialName}</h4>
        <p>{product.price}€</p>
        <p>Riegos por semana: {product.wateringsPerWeek}</p>
        <p>Fertilizante recomendado: {product.fertilizerType === 'nitrogen' ? 'nitrogenado' : 'fosforado'}</p>
        <p>Altura: {product.heightInCm}cm</p>
      </div>
    </div>
  );
}

export default ProductDetailCard;
