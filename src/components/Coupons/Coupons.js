import React from 'react';
import { connect } from 'react-redux';

import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Coupons.scss';

function Coupons({ coupons, handleHideCoupons }) {
  return (
    <div className="coupons-container">
      <div className="coupons-header">
        <div className="hide-coupons" onClick={() => handleHideCoupons()}>
          <FontAwesomeIcon icon={ faArrowAltCircleLeft } />
        </div>
        Available Coupons
      </div>
      <div className="coupons">
        {coupons.map(coupon => (
          <div className="coupon-container">
            <div className="coupon-code">{ coupon.code }:&nbsp;</div>
            <div className="coupon-description">
              use for { (coupon.amount * 100) }% off&nbsp;
              {coupon.condition > 0
                ? `orders of ¥${ coupon.condition }+`
                : "all orders"
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    coupons: state.shop.coupons,
  };
};

export default connect(mapStateToProps)(Coupons);
