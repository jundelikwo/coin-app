/**
 * @format
 */

import 'react-native';
import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import App from '../App';

import {render, waitFor} from '@testing-library/react-native';

const data = {
  success: true,
  message: 'Current rates',
  data: {
    rates: {},
  },
};

describe('App', () => {
  it('should render successfully', () => {
    const mock = new MockAdapter(axios);
    mock
      .onGet('https://staging-biz.coinprofile.co/v3/currency/rate')
      .reply(200, data);

    render(<App />);
    waitFor(() => null);
  });
});
