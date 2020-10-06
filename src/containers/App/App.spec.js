import React from 'react';
import { shallow } from 'enzyme';

import { Navbar } from 'components';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Navbar Component', () => {
    expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true);
  });
});