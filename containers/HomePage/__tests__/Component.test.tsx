import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import HomePage from '@containers/HomePage';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MockedProvider } from '@apollo/client/testing';
import { mocks, mocksWithError } from '@utils/mock';

Enzyme.configure({ adapter: new Adapter() });

describe('<HomePage />', () => {
  test('render correctly', () => {
    const wrapper = shallow(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomePage />
      </MockedProvider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  test('render when error', () => {
    const wrapper = shallow(
      <MockedProvider mocks={mocksWithError} addTypename={false}>
        <HomePage />
      </MockedProvider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
