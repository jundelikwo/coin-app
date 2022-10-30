import React, {Fragment, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import SearchInput from 'src/components/SearchInput';
import Header from 'src/components/Header';
import styles from './styles';

export const Home = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <Fragment>
      <Header title="Home" />
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <SearchInput
            placeholder="Search Coins"
            value={searchInput}
            onChangeText={setSearchInput}
          />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default Home;
