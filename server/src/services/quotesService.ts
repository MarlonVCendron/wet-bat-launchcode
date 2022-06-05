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
  return await QuoteModel.query();
};

export const getQuote = async (quoteId: string) => {
  return await QuoteModel.query().findById(quoteId);
};

export const insertQuote = async (quote: IQuote) => {
  await QuoteModel.query().insert(quote);
};

export const deleteQuote = async (quoteId: string) => {
  await QuoteModel.query().deleteById(quoteId);
};

export const updateQuote = async (quote: IQuote) => {
  if (!quote.id) throw new Error('Missing ID to update');
  return await QuoteModel.query().findById(quote.id).patch(quote);
};
