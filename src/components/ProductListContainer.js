import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import ProductListSearch from './ProductListSearch';

const ProductListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      setLoading(true);

      fetch("https://dulces-petalos.herokuapp.com/api/product")
        .then(response => response.json())
        .then(products => {
          setProducts(products)
          setLoading(false);
        });
    },
    [],
  );

  return (
    <div className="product_list_container">
      <div className="p-3 d-flex flex-row justify-content-between">
        <h2>Products</h2>
        <ProductListSearch products={products} />
      </div>

      <ProductList products={products} />
    </div>
  );
}

export default ProductListContainer;
