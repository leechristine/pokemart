import React from 'react';
import { connect } from 'react-redux';

import './CartItemCard.scss';

function CartItemCard({ productData }) {
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
        <button>remove from cart</button>
      </div>
    </div>
  );
}

export default CartItemCard;
