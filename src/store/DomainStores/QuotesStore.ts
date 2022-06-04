import { makeAutoObservable, observable, action, runInAction } from 'mobx';
import { fetchQuotes } from '../../services/quotesService';

interface IQuote {
  id: string;
  name: string;
  departure_loc: string;
  destination_loc: string;
  departure_date: Date;
  return_date: Date;
  people: number;
}

interface IQuotesStore {
  quotes: Array<IQuote>;
  loading: boolean;
  error: boolean;
}

export class QuotesStore implements IQuotesStore {
  @observable quotes = [] as Array<IQuote>;
  @observable loading = false;
  @observable error = false;

  constructor() {
    makeAutoObservable(this);
  }

  @action loadQuotes = async () => {
    try {
      runInAction(() => {
        this.loading = true;
        this.error = false;
      });

      const data = await fetchQuotes();
      if (!data || !data?.length) throw new Error('No data');

      runInAction(() => {
        this.quotes = data;
        this.loading = false;
      });
    } catch (e) {
      runInAction(() => {
        this.loading = false;
        this.error = true;
      });
    }
  };
}
