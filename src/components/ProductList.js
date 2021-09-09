import React from 'react';
import ProductCard from './ProductCard';

function ProductList(props) {
  return (
    <div className="d-flex flex-row align-items-center justify-content-between flex-wrap p-3">
      {
        props.products.map((product, i) => {
          return <ProductCard key={i} product={product} />
        })
      }
    </div>
  );
}

export default ProductList;
