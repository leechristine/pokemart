import React from 'react';
import { shallow } from 'enzyme';

import { Products } from 'components';
import Shop from './Shop';

describe('Shop', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Shop />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Products Component', () => {
    expect(wrapper.containsMatchingElement(<Products />)).toEqual(true);
  });
});