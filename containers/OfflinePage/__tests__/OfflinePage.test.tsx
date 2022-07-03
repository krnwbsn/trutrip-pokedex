import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import OfflinePage from '@containers/OfflinePage';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('<OfflinePage />', () => {
  test('render correctly', () => {
    const wrapper = shallow(<OfflinePage />);
    expect(wrapper.exists()).toBe(true);
  });
});
