import { SideBarStore } from './SideBarStore';

export class RootStore {
  sideBarStore: SideBarStore;
  constructor() {
    this.sideBarStore = new SideBarStore();
  }
}

export default new RootStore();
