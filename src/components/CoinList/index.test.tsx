/**
 * @format
 */

import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import CoinList from './index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('CoinList', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CoinList coins={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders ListEmptyComponent when coins.length is zero', () => {
    const tree = renderer.create(<CoinList coins={[]} />).root;
    expect(tree.findAllByType(Text).length).toBe(1);
    expect(tree.findAllByType(TouchableOpacity).length).toBe(0);
  });

  it('renders items when coins is set', () => {
    const coins = ['Hello', 'World'];
    const tree = renderer.create(<CoinList coins={coins} />).root;
    expect(tree.findAllByType(TouchableOpacity).length).toBe(2);
  });
});
