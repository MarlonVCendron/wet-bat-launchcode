import api from './api';

export const fetchQuotes = async () => {
  const client = await api();
  const { data } = await client.get('/quotes');
  return data;
};
