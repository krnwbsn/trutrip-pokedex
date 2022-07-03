import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Offline from '@pages/_offline';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {
  test('render correctly', () => {
    const wrapper = shallow(<Offline />);
    expect(wrapper.exists()).toBe(true);
  });
});
