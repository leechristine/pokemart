import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from 'actions/shop';
import './ShopProductCard.scss';

function ShopProductCard({ productData, addToCart }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={ productData.image } alt={ productData.title } />
      </div>
      <div className="product-info">
        <div className="product-title">{ productData.title }</div>
        <div className="product-desc">{ productData.description }</div>
        <div className="product-price">¥{ productData.price }</div>
      </div>
      <div className="product-actions">
        <button onClick={() => addToCart(productData.id)}>add to cart</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  };
};

export default connect(null, mapDispatchToProps)(ShopProductCard);
