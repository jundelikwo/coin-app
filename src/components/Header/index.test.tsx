/**
 * @format
 */

import 'react-native';
import React from 'react';
import Header from './index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Header title="Hello" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
