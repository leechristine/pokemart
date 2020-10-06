import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { faTrashAlt, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { removeFromCart, addQuantity, subQuantity } from 'actions/shop';
import './CartItemCard.scss';

function CartItemCard({ productData, removeFromCart, addQuantity, subQuantity }) {
  const [productQuantity, setProductQuantity] = useState(productData.quantity);

  useEffect(() => {
    setProductQuantity(productData.quantity);
  }, [productData, productQuantity]);

  return (
    <div className="cart-product-card">
      <div className="product-main">
        <div className="product-image">
          <img src={ productData.image } alt={ productData.title } />
        </div>
        <div className="product-info">
          <div className="product-title">{ productData.title }</div>
          <div className="product-desc">{ productData.description }</div>
          <div className="product-price">¥{ productData.price }</div>
        </div>
      </div>
      <div className="product-actions">
        <div className="product-quantity-container">
          <div className="sub-quantity" onClick={() => subQuantity(productData.id)}>
            <FontAwesomeIcon className="action-icon" icon={ faMinus } />
          </div>
          <div className="product-quantity">{ productQuantity }</div>
          <div className="add-quantity" onClick={() => addQuantity(productData.id)}>
            <FontAwesomeIcon className="action-icon" icon={ faPlus } />
          </div>
        </div>
        <div className="remove-from-cart" onClick={() => removeFromCart(productData.id)}>
          <FontAwesomeIcon className="action-icon" icon={ faTrashAlt } />
        </div>
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
