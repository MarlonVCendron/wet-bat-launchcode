import { makeAutoObservable, observable, action, runInAction } from 'mobx';
import { toast } from 'react-toastify';
import {
  IQuote,
  fetchQuotes,
  fetchQuote,
  postQuote,
  updateQuote,
  deleteQuote,
} from '../../services/quotesService';

interface IQuotesStore {
  quotes: Array<IQuote>;
  editQuote: IQuote | null;
  loading: boolean;
  error: boolean;
}

export class QuotesStore implements IQuotesStore {
  @observable quotes = [] as Array<IQuote>;
  @observable editQuote = {} as IQuote;
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
      if (!data) throw new Error('No data');

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

  @action loadQuoteToEdit = async (quoteId: string | undefined) => {
    try {
      if (!quoteId) throw new Error('Missing quote ID');

      runInAction(() => {
        this.loading = true;
        this.error = false;
      });

      const data = await fetchQuote(quoteId);
      if (!data) throw new Error('No data');

      runInAction(() => {
        this.editQuote = data;
        this.loading = false;
      });
    } catch (e) {
      runInAction(() => {
        this.loading = false;
        this.error = true;
      });
    }
  };

  @action sendQuote = async (quote: IQuote) => {
    try {
      await postQuote(quote);
      toast.success('Saved new quote');
    } catch (e) {
      console.error(e);
      toast.error('Error saving quote');
    }
  };

  @action updateQuoteAction = async (quote: IQuote) => {
    try {
      await updateQuote(quote);
      toast.success('Updated quote');
    } catch (e) {
      console.error(e);
      toast.error('Error updating quote');
    }
  };

  @action deleteQuoteAction = async (quote: IQuote) => {
    try {
      await deleteQuote(quote);
      toast.success('Deleted quote');
    } catch (e) {
      console.error(e);
      toast.error('Error deleting quote');
    }
  };
}
