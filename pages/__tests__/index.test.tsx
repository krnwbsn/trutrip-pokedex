import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Home from '@pages/index';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {
  test('render correctly', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.exists()).toBe(true);
  });
});
