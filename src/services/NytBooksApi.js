import axios from 'axios';

import { NYT_BOOKS_API_URL, NYT_APP_KEY } from '../constants';

const NytBooksApi = axios.create({
  baseURL: NYT_BOOKS_API_URL,
});

export const getBooks = (params) => {
  const apiKey = NYT_APP_KEY;

  const authParams = {
    'api-key': apiKey,
    list: 'travel',
  };

  return NytBooksApi.get('/lists.json', { params: { ...authParams, ...params } });
};

export const getListNames = () => {
  const apiKey = NYT_APP_KEY;

  const authParams = {
    'api-key': apiKey,
  };

  return NytBooksApi.get('/lists/names.json', { params: authParams });
};

export default NytBooksApi;
