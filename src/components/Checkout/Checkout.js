import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { applyCoupon, removeCoupon } from 'actions/shop';
import { Coupons } from 'components';
import './Checkout.scss';

function Checkout({ cart, coupon, applyCoupon, removeCoupon }) {
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [cartDiscount, setCartDiscount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [showCoupons, setShowCoupons] = useState("invisible");

  useEffect(() => {
    let subtotal = 0;
    cart.forEach((item) => {
      subtotal += item.quantity * item.price;
    });
    setCartSubtotal(subtotal);
    console.log(subtotal)

    let discount = 0;
    if (coupon.length != 0 && subtotal >= coupon[0].condition) {
      cart.forEach((item) => {
        discount += (item.quantity * item.price * coupon[0].amount);
      });
    }
    setCartDiscount(discount);

    let total = subtotal - discount;
    setCartTotal(total);
  }, [cart, coupon, cartTotal, cartDiscount, cartSubtotal]);

  let couponInput = React.createRef();

  function handleApplyCoupon() {
    if (couponInput.current.value != "") {
      applyCoupon(couponInput.current.value);
      couponInput.current.value = "";
    }
  }

  function toggleShowCoupons() {
    if (showCoupons == "invisible") {
      setShowCoupons("visible");
    }
    else {
      setShowCoupons("invisible");
    }
  }

  return (
    <div className="checkout-container">
      <div className={ `coupons-list ${ showCoupons }` }>
        <Coupons handleHideCoupons={ () => toggleShowCoupons() } />
      </div>
      <div className="checkout-header">Checkout</div>
      <div className="coupon-container">
        <div className="coupon-title">
          Coupon
          <div className="view-coupons" onClick={() => toggleShowCoupons()}>
            <FontAwesomeIcon icon={ faQuestionCircle } />
          </div>
        </div>
        {(coupon.length == 0 || !coupon[0].isValid) &&
        <div className="coupon-input-container">
          <input className="coupon-input" ref={ couponInput } placeholder="" />
          <div className="apply-coupon" onClick={() => handleApplyCoupon()}>add</div>
        </div>
        }
        {coupon.length != 0 &&
          <div className="coupon-info">
            <div className="coupon-applied">
              <div className="coupon-code">{ coupon[0].code }</div>
              {coupon[0].isValid
                ? <div className="coupon-validity">&nbsp;was applied successfully!</div>
                : <div className="coupon-validity">&nbsp;is not a valid coupon ☹</div>
              }
            </div>
            {coupon[0].isValid &&
              <div className="remove-coupon" onClick={() => removeCoupon()}>remove</div>
            }
          </div>
        }
      </div>
      <div className="checkout-title">Cart Summary</div>
      <div className="checkout-summary">
        <div className="checkout-subtotal">
          <div className="label">Subtotal</div>
          <div className="amount">¥{ cartSubtotal }</div>
        </div>
        <div className="checkout-discount">
          <div className="label">Discount</div>
          <div className="amount">-¥{ cartDiscount }</div>
        </div>
      </div>
      <div className="separator"></div>
      <div className="checkout-total">
        <div className="label">Total</div>
        <div className="amount">¥{ cartTotal }</div>
      </div>
      {/*
      <div className="checkout-actions">
        <button>checkout</button>
      </div>
      */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    coupon: state.shop.coupon
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    applyCoupon: (code) => dispatch(applyCoupon(code)),
    removeCoupon: () => dispatch(removeCoupon())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
