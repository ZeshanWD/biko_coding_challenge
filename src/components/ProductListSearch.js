import React from 'react';

const ProductListSearch = (props = {}) => {

  const { setSearchTxt } = props;

  return (
    <div>
        <input onChange={(e) => setSearchTxt(e.target.value.toLowerCase())} type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
    </div>
  );
}

export default ProductListSearch;
