import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Information from '@components/Information';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('<Information />', () => {
  let TEST;
  beforeEach(() => {
    TEST = { message: 'test' };
  });

  test('render correctly', () => {
    const wrapper = shallow(<Information {...TEST} />);
    expect(wrapper.exists()).toBe(true);
  });
});
