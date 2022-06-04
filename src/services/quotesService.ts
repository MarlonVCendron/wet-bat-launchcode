import api from './api';

export interface IQuote {
  id?: string;
  name: string;
  departure_loc: string;
  destination_loc: string;
  departure_date: Date;
  return_date: Date;
  people: number;
}

export const fetchQuotes = async () => {
  const client = await api();
  const { data } = await client.get('/quotes');
  return data;
};

export const postQuote = async (quote: IQuote) => {
  const client = await api();
  const { data } = await client.post('/quote', quote);
  return data;
};
