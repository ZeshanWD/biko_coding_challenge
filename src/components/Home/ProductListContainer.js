import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import ProductListSearch from './ProductListSearch';

const ProductListContainer = () => {
  const [products, setProducts] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  // fetch products
  useEffect(
    () => {
      fetch(`${process.env.REACT_APP_API_URL}/product`)
        .then(response => response.json())
        .then(products => {
          setProducts(products)
        });
    },
    [],
  );

  const filtered = products.filter(p => new RegExp(searchTxt).test(p.name.toLowerCase()) || new RegExp(searchTxt).test(p.binomialName.toLowerCase()))

  return (
    <div className="product_list_container">
      <div className="p-3 d-flex flex-row justify-content-between">
        <h2>Products</h2>
        <ProductListSearch setSearchTxt={setSearchTxt} />
      </div>

      <ProductList products={filtered} />
    </div>
  );
}

export default ProductListContainer;
