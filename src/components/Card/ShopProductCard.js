import React from 'react';
import { connect } from 'react-redux';

import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { addToCart } from 'actions/shop';
import './ShopProductCard.scss';

function ShopProductCard({ productData, addToCart }) {
  return (
    <div className="shop-product-card" onClick={() => addToCart(productData.id)}>
      <div className="product-card-top">
        <div className="product-main">
          <div className="product-image">
            <img src={ productData.image } alt={ productData.title } />
          </div>
          <div className="product-info">
            <div className="product-title">{ productData.title }</div>
            <div className="product-price">¥{ productData.price }</div>
          </div>
        </div>
        <div className="product-actions">
          <div className="add-to-cart">
            <FontAwesomeIcon icon={ faCartPlus } />
          </div>
        </div>
      </div>
      <div className="separator"></div>
      <div className="product-card-bot">
        <div className="product-desc">{ productData.description }</div>
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
