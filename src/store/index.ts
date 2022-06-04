import { StatsStore, QuotesStore } from './DomainStores';
import { SideBarStore } from './ViewStores';

export class RootStore {
  sideBarStore: SideBarStore;
  quotesStore: QuotesStore;
  statsStore: StatsStore;
  constructor() {
    this.sideBarStore = new SideBarStore();
    this.quotesStore = new QuotesStore();
    this.statsStore = new StatsStore();
  }
}

export default new RootStore();
