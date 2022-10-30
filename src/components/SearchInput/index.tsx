import React from 'react';
import {Image, TextInput, TextInputProps, View} from 'react-native';
import styles from './styles';

const SearchInput = (props: TextInputProps) => {
  return (
    <View>
      <Image
        source={require('src/assets/images/search.png')}
        style={styles.image}
      />
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

export default SearchInput;
