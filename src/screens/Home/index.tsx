import React, {Fragment, useMemo, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import SearchInput from 'src/components/SearchInput';
import Header from 'src/components/Header';
import CoinList from 'src/components/CoinList';
import {RateType} from 'src/store/actions';
import styles from './styles';

export interface HomeProps {
  rates: RateType;
}

export const Home = ({rates}: HomeProps) => {
  const [searchText, setSearchText] = useState('');
  const ratesKeys = useMemo(() => {
    const formattedSearchText = searchText.trim().toLowerCase();
    return Object.keys(rates).filter(
      rate => rate.toLowerCase().indexOf(formattedSearchText) >= 0,
    );
  }, [rates, searchText]);

  return (
    <Fragment>
      <Header title="Home" />
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <SearchInput
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search Coins"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        <CoinList coins={ratesKeys} />
      </SafeAreaView>
    </Fragment>
  );
};

export default Home;
