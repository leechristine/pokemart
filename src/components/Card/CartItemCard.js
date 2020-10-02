import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { removeFromCart, addQuantity, subQuantity } from 'actions/shop';
import './CartItemCard.scss';

function CartItemCard({ productData, removeFromCart, addQuantity, subQuantity }) {
  const [productQuantity, setProductQuantity] = useState(productData.quantity);

  useEffect(() => {
    setProductQuantity(productData.quantity);
  }, [productData, productQuantity]);

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
        <div className="product-quantity-container">
          <button onClick={() => subQuantity(productData.id)}>-</button>
          <div className="product-quantity">{ productQuantity }</div>
          <button onClick={() => addQuantity(productData.id)}>+</button>
        </div>
        <button onClick={() => removeFromCart(productData.id)}>remove from cart</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    addQuantity: (id) => dispatch(addQuantity(id)),
    subQuantity: (id) => dispatch(subQuantity(id))
  };
};

export default connect(null, mapDispatchToProps)(CartItemCard);
