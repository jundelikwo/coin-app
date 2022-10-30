import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from 'src/screens/Home';
import {fetchCoins, RateType} from 'src/store/actions';

export const App = () => {
  // In a full size app, this would have been using something redux
  // But for this use case, redux would be an overkill
  // useState works fine
  const [rates, setRates] = useState<RateType>({});

  useEffect(() => {
    fetchCoins((data: RateType) => {
      setRates(data);
      // Store coins in AsyncStorage
      AsyncStorage.setItem('coins', JSON.stringify(data));
    });

    (async () => {
      // Fetch store coins from AsyncStorage
      const data = await AsyncStorage.getItem('coins');
      if (data) {
        const coinsInStorage = JSON.parse(data);
        setRates((state: RateType) => {
          // Only use coinsInStorage if we haven't fetched the new rates
          // and they are actually coinsInStorage
          if (!Object.keys(state).length && coinsInStorage) {
            return coinsInStorage;
          }
          return state;
        });
      }
    })();
  }, []);

  return <Home rates={rates} />;
};

export default App;
