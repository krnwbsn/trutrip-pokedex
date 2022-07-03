import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import PokemonDetailsPage from '@containers/PokemonDetailsPage';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MockedProvider } from '@apollo/client/testing';

Enzyme.configure({ adapter: new Adapter() });

describe('<PokemonDetailsPage />', () => {
  test('render correctly', () => {
    const wrapper = shallow(
      <MockedProvider mocks={[]} addTypename={false}>
        <PokemonDetailsPage />
      </MockedProvider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
