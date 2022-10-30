/**
 * @format
 */

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import {fetchCoins} from './actions';

const data = {
  success: true,
  message: 'Current rates',
  data: {
    rates: {},
  },
};

describe('fetchCoins', () => {
  it('should call the api', async () => {
    const mock = new MockAdapter(axios);
    mock
      .onGet('https://staging-biz.coinprofile.co/v3/currency/rate')
      .reply(200, data);

    await fetchCoins(res => res);
    expect(mock.history.get.length).toEqual(1);
  });
});
