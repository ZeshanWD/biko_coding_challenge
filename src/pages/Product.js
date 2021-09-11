import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Header from '../components/Header';
import ProductDetailCard from '../components/ProductDetailCard';

const Product = (props = {}) => {
  const [product, setProduct] = useState([]);

  const { id } = useParams()
  useEffect(
    () => {
      fetch(`${process.env.REACT_APP_API_URL}/product/${id}`)
        .then(response => response.json())
        .then(product => {
          setProduct(product)
        });
    },
    [id],
  );

  return (
    <div className="d-flex flex-column justify-content-between">
      <Header />
      <div className="p-3 d-flex flex-row justify-content-between">
        <h2>Product Detail</h2>
        <Link to="/">
          <button type="button" className="btn btn-dark">Go Back</button>
        </Link>
      </div>
      <ProductDetailCard product={product} />
    </div>
  );
}

export default Product;