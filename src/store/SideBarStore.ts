import { makeAutoObservable, observable, action } from 'mobx';

export interface ISideBarStore {
  isOpen: boolean;
}

export class SideBarStore implements ISideBarStore {
  @observable isOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  @action toggle = (): void => {
    this.isOpen = !this.isOpen;
  };

  @action open = (): void => {
    this.isOpen = true;
  };

  @action close = (): void => {
    this.isOpen = false;
  };
}
