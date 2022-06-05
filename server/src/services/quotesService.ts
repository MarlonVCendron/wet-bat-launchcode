import QuoteModel from '../models/Quote';

export interface IQuote {
  id?: string;
  name: string;
  departure_loc: string;
  destination_loc: string;
  departure_date: Date;
  return_date: Date;
  people: number;
}

export const getQuotes = async () => {
  const data = await QuoteModel.query();
  return data;
};

export const insertQuote = async (quote: IQuote) => {
  await QuoteModel.query().insert(quote);
};

export const deleteQuote = async (quoteId: string) => {
  await QuoteModel.query().deleteById(quoteId);
};
