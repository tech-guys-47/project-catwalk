import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import RelatedProductsList from './RelatedProductsList.jsx';
import YourOutfitList from './YourOutfitList.jsx';

const RelatedProducts = ({ currentProduct, handleChangeProduct, postUserClick }) => {

  return (
    <div id='related' data-testid='related-products' onClick={(e) => postUserClick(e, 'Related Products')}>
      <h3> Related Products </h3>
      <RelatedProductsList currentProduct={currentProduct} handleChangeProduct={handleChangeProduct}/>
      <h3> Your Outfit </h3>
      <YourOutfitList currentProduct={currentProduct} handleChangeProduct={handleChangeProduct}/>
    </div>
  )
}

RelatedProducts.propTypes = {
  currentProduct: PropTypes.object,
  handleChangeProduct: PropTypes.func,
  postUserClick: PropTypes.func
};

export default RelatedProducts;