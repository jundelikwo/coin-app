import {Dimensions, Platform} from 'react-native';

export function isAtLeastIphoneX() {
  const iphoneXLength = 812;
  const iphoneXSMaxLength = 896;
  const windowDimensions = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    (windowDimensions.width >= iphoneXLength ||
      windowDimensions.height >= iphoneXLength ||
      windowDimensions.width >= iphoneXSMaxLength ||
      windowDimensions.height >= iphoneXSMaxLength)
  );
}

export const safeAreaTopHeight =
  Platform.OS === 'ios' ? (isAtLeastIphoneX() ? 44 : 20) : 0;
