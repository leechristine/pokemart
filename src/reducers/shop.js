import * as shopVars from 'variables/shop';
import db from 'db.js';

const INITIAL_STATE = {
  products: db.products, // [] of {id, title, description, price, image}
  cart: [], // {id, title, description, price, image, quantity}
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case shopVars.ADD_TO_CART:
      // get item's data from products
      const item = state.products.find(product => product.id === action.id);
      // check if item is already in cart
      const inCart = state.cart.find(item =>
        item.id === action.id ? true : false
      );
      // if item is in cart, update quantity; else, add item to cart
      return {
        ...state,
        cart: inCart
        ? state.cart.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
          )
        : [...state.cart, { ...item, quantity: 1 }],
      };
    case shopVars.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
      };
    case shopVars.ADD_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case shopVars.SUB_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.id && item.id > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case shopVars.EMPTY_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default shopReducer;