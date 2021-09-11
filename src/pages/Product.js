import React, { useEffect, useState } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';

import Header from '../components/Header';
import ProductDetailCard from '../components/ProductDetailCard';

const Product = (props = {}) => {
  const [product, setProduct] = useState([]);

  const { id } = useParams()
  useEffect(
    () => {
      fetch(`${process.env.REACT_APP_API_URL}/product/${id}`)
        .then(response => {
          if (response.status !== 200) {
            return null;
          }

          return response.json();
        })
        .then(product => {
          setProduct(product)
        });
    },
    [id],
  );

  // product not found
  if (!product) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <Header />
      <div style={{ maxWidth: '60%', margin: 'auto' }}>
        <div className="p-3 d-flex flex-row justify-content-between">
          <h2>Product Detail</h2>
          <Link to="/">
            <button type="button" className="btn btn-dark">Go Back</button>
          </Link>
        </div>
        <ProductDetailCard product={product} />
      </div>
    </div>
  );
}

export default Product;