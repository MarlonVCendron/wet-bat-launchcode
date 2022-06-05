import api from './api';

export interface IQuote {
  id?: string;
  name: string;
  departure_loc: string;
  destination_loc: string;
  departure_date: string;
  return_date: string;
  people: number;
}

export const defaultQuote = {
  departure_loc: '',
  destination_loc: '',
  return_date: '',
  departure_date: '',
  people: 0,
  name: '',
};

export const fetchQuotes = async () => {
  const client = await api();
  const { data } = await client.get('/quotes');
  return data;
};

export const fetchQuote = async (quoteId: string) => {
  const client = await api();
  const { data } = await client.get(`/quote/${quoteId}`);
  return data;
};

export const postQuote = async (quote: IQuote) => {
  const client = await api();
  await client.post('/quote', quote);
};

export const updateQuote = async (quote: IQuote) => {
  const client = await api();
  await client.put('/quote', quote);
};

export const deleteQuote = async (quote: IQuote) => {
  const client = await api();
  await client.delete(`/quote/${quote.id}`);
};
