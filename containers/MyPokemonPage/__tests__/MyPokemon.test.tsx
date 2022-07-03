import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import MyPokemonPage from '@containers/MyPokemonPage';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Provider from '@context/provider';

Enzyme.configure({ adapter: new Adapter() });

describe('<MyPokemonPage />', () => {
  test('render correctly', () => {
    const wrapper = shallow(
      <Provider>
        <MyPokemonPage />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
