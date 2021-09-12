import React from 'react';

const ProductDetailCard = (props = {}) => {

  const { product } = props;

  return (
    <div className="product_detail_card">
      <img className="product_detail_card_img" src={product.imgUrl} alt={product.name} />
      <div className="product_detail_card_description">
        <h1>{product.name}</h1>
        <h4>{product.binomialName}</h4>
        <p>Precio: {product.price}€</p>
        <p>Riegos por semana: {product.wateringsPerWeek}</p>
        <p>Fertilizante recomendado: {product.fertilizerType === 'nitrogen' ? 'nitrogenado' : 'fosforado'}</p>
        <p>Altura: {product.heightInCm}cm</p>
      </div>
    </div>
  );
}

export default ProductDetailCard;
