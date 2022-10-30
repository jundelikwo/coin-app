import React, {Fragment, useCallback, useMemo, useRef, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import SearchInput from 'src/components/SearchInput';
import Header from 'src/components/Header';
import CoinList from 'src/components/CoinList';
import {RateType} from 'src/store/actions';
import styles from './styles';
import CoinDetails from '../../components/CoinDetails';

export interface HomeProps {
  rates: RateType;
}

export const Home = ({rates}: HomeProps) => {
  const bottomSheet = useRef<any>(null);
  const [searchText, setSearchText] = useState('');
  const [selectedCoin, setSelectedCoin] = useState('');
  const ratesKeys = useMemo(() => {
    const formattedSearchText = searchText.trim().toLowerCase();
    return Object.keys(rates).filter(
      rate => rate.toLowerCase().indexOf(formattedSearchText) >= 0,
    );
  }, [rates, searchText]);

  const handleCoinSelect = useCallback((coin: string) => {
    setSelectedCoin(coin);
    bottomSheet.current.open();
  }, []);

  return (
    <Fragment>
      <Header title="Home" />
      <SafeAreaView testID="home-screen" style={styles.container}>
        <View style={styles.search}>
          <SearchInput
            testID="search-input"
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search Coins"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        <CoinList coins={ratesKeys} onCoinSelect={handleCoinSelect} />
        <CoinDetails
          forwardedRef={bottomSheet}
          coin={selectedCoin}
          rate={rates[selectedCoin]?.rate}
        />
      </SafeAreaView>
    </Fragment>
  );
};

export default Home;
