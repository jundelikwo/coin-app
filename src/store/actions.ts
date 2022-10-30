import axios from 'axios';

export interface RateDataType {
  key: string;
  rate: number;
}

export interface RateType {
  [id: string]: RateDataType;
}

export const fetchCoins = (handleSuccess: (data: RateType) => void) => {
  axios
    .get('https://staging-biz.coinprofile.co/v3/currency/rate')
    .then(async response => {
      const {data} = response.data;
      handleSuccess(data.rates);
    })
    .catch(error => console.log(error));
};
