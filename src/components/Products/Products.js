import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { ShopProductCard } from 'components';
import './Products.scss';

function Products({ products }) {
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    let count = 0;
    products.forEach((item) => {
      count += 1;
    });
    
    setProductCount(count);
  }, [products, productCount]);

  return (
    <div className="products-container">
      <div className="products-navbar">
        <div className="products-category">All Products</div>
        <div className="products-total">
          <div className="products-total-amount">{ productCount }</div>
          <div className="products-total-label">&nbsp;items</div>
        </div>
      </div>
      <div className="products">
        {products.map(product => (
          <div className="product-container">
            <ShopProductCard key={product.id} productData={ product } />
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
