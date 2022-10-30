import React, {useEffect, useState} from 'react';
import Home from 'src/screens/Home';
import {fetchCoins, RateType} from 'src/store/actions';

export const App = () => {
  // In a full size app, this would have been using something redux
  // But for this use case, redux would be an overkill
  // useState works fine
  const [rates, setRates] = useState<RateType>({});

  useEffect(() => {
    fetchCoins((data: RateType) => setRates(data));
  }, []);

  return <Home rates={rates} />;
};

export default App;
