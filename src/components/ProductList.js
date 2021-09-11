import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

function ProductList(props) {
  return (
    <div className="d-flex flex-row align-items-center justify-content-between flex-wrap p-3">
      {
        props.products.map((product, i) => {
          return (
            <Link style={{ textDecoration: 'none' }} key={i} to={`product/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          )
        })
      }
    </div>
  );
}

export default ProductList;
