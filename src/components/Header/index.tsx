import React from 'react';

import {StatusBar, Text, View} from 'react-native';
import {colors} from 'src/utils/theme';
import styles from './styles';

export interface HeaderProps {
  title: string;
}

export function Header({title}: HeaderProps) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.DARK} />
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
    </View>
  );
}

export default Header;
