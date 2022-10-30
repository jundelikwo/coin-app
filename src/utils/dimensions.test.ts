/**
 * @format
 */

import 'react-native';
import {isAtLeastIphoneX, safeAreaTopHeight} from './dimensions';

describe('Dimensions', () => {
  it('isAtLeastIphoneX return correctly', () => {
    expect([true, false]).toContain(isAtLeastIphoneX());
  });

  it('safeAreaTopHeight return correctly', () => {
    expect([0, 20, 44]).toContain(safeAreaTopHeight);
  });
});
