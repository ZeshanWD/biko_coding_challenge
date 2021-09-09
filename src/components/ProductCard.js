import React from 'react';

const ProductCard = (props) => {

  const { product } = props;

  return (
    <div className="card mb-5">
      <img src={product.imgUrl} className="card-img-top" alt={product.name} style= {{ width: '250px', height: '250px' }} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{product.binomialName}</h6>
        <p className="card-text">{product.price}€</p>
      </div>
    </div>
  );
}

export default ProductCard;
