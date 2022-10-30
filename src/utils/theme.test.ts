/**
 * @format
 */

import 'react-native';
import {colors} from './theme';

describe('Theme - Color', () => {
  it('should have a color', () => {
    const colorKeys = Object.keys(colors);

    expect(colorKeys.length).toBeGreaterThanOrEqual(1);
  });

  it('colors should be strings', () => {
    const colorValues = Object.values(colors);

    expect(colorValues).toEqual(expect.arrayContaining([expect.any(String)]));
  });
});
