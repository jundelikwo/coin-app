/**
 * @format
 */

import 'react-native';
import React from 'react';
import CoinDetails from './index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CoinDetails coin="Hello" rate="World" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
