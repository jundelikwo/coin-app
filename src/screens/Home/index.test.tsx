/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from './index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Home', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Home rates={{}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
