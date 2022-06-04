import QuoteModel from '../models/Quote';

export const getQuotes = async () => {
  const data = await QuoteModel.query();
  return data;
};
