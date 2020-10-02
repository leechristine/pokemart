import React from 'react';
import { connect } from 'react-redux';

import { removeFromCart } from 'actions/shop';
import './CartItemCard.scss';

function CartItemCard({ productData, removeFromCart }) {
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
        <button onClick={() => removeFromCart(productData.id)}>remove from cart</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id))
  };
};

export default connect(null, mapDispatchToProps)(CartItemCard);
