import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Name from '@pages/[name]';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('<Name />', () => {
  test('render correctly', () => {
    const wrapper = shallow(<Name />);
    expect(wrapper.exists()).toBe(true);
  });
});
