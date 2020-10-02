import * as shopVars from 'variables/shop';
import db from 'db.js';

const INITIAL_STATE = {
  products: db.products, // [] of {id, title, description, price, image}
  cart: [], // {id, title, description, price, image, quantity}
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case shopVars.ADD_TO_CART:
      return {};
    case shopVars.REMOVE_FROM_CART:
      return {};
    case shopVars.ADD_QUANTITY:
      return {};
    case shopVars.SUB_QUANTITY:
      return {};
    case shopVars.EMPTY_CART:
      return {};
    default:
      return state;
  }
};

export default shopReducer;