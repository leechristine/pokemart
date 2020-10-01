import * as shopVars from 'variables/shop';

export const addToCart = (id) => {
  return {
    type: shopVars.ADD_TO_CART,
    id,
  };
};

export const removeFromCart = (id) => {
  return {
    type: shopVars.REMOVE_FROM_CART,
    id,
  };
};

export const addQuantity = (id) => {
  return {
    type: shopVars.ADD_QUANTITY,
    id,
  };
};

export const subQuantity = (id) => {
  return {
    type: shopVars.SUB_QUANTITY,
    id,
  };
};

export const emptyCart = () => {
  return {
    type: shopVars.EMPTY_CART,
  };
};