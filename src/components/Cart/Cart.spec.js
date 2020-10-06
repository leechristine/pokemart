import React from 'react';
import { shallow } from 'enzyme';

import { Checkout, CartItems } from 'components';
import Cart from './Cart';

describe('Cart', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Cart />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Checkout Component', () => {
    expect(wrapper.containsMatchingElement(<Checkout />)).toEqual(true);
  });

  it('should render the CartItems Component', () => {
    expect(wrapper.containsMatchingElement(<CartItems />)).toEqual(true);
  });
});