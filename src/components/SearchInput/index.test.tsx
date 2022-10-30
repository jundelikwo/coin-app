/**
 * @format
 */

import 'react-native';
import React from 'react';
import SearchInput from './index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('SearchInput', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SearchInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
