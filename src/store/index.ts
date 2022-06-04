import { StatsStore } from './DomainStores';
import { SideBarStore } from './ViewStores';

export class RootStore {
  sideBarStore: SideBarStore;
  statsStore: StatsStore;
  constructor() {
    this.sideBarStore = new SideBarStore();
    this.statsStore = new StatsStore();
  }
}

export default new RootStore();
