import React from 'react';
import { connect } from 'react-redux';

import { ShopProductCard } from 'components';
import './Products.scss';

function Products({ products }) {
  return (
    <div className="products-container">
      {products.map(product => (
        <div className="product-container">
          <ShopProductCard key={product.id} productData={ product } />
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
