import { makeAutoObservable, observable, action, runInAction } from 'mobx';
import {
  fetchCloseRatiosData,
  fetchPotentialRevenueData,
  fetchRevenueData,
} from '../../services/statsService';

interface IRevenueData {
  month: string;
  line1: number;
  line2: number;
}

interface IPotRevenueData {
  name: string;
  value: number;
}

interface ICloseRatiosData {
  name: string;
  value: number;
}

interface IStatsStore {
  revenueData: Array<IRevenueData>;
  revenueLoading: boolean;
  revenueError: boolean;
  potRevenueData: Array<Array<IPotRevenueData>>;
  potRevenueLoading: boolean;
  potRevenueError: boolean;
  closeRatiosData: Array<ICloseRatiosData>;
  closeRatiosLoading: boolean;
  closeRatiosError: boolean;
}

export class StatsStore implements IStatsStore {
  @observable revenueData = [] as Array<IRevenueData>;
  @observable revenueLoading = false;
  @observable revenueError = false;
  @observable potRevenueData = [] as Array<Array<IPotRevenueData>>;
  @observable potRevenueLoading = false;
  @observable potRevenueError = false;
  @observable closeRatiosData = [] as Array<ICloseRatiosData>;
  @observable closeRatiosLoading = false;
  @observable closeRatiosError = false;

  constructor() {
    makeAutoObservable(this);
  }

  @action loadRevenueData = async () => {
    try {
      runInAction(() => {
        this.revenueLoading = true;
        this.revenueError = false;
      });

      const data = await fetchRevenueData();
      if (!data || !data?.length) throw new Error('No data');

      runInAction(() => {
        this.revenueData = data;
        this.revenueLoading = false;
      });
    } catch (e) {
      runInAction(() => {
        this.revenueLoading = false;
        this.revenueError = true;
      });
    }
  };

  @action loadPotRevenueData = async () => {
    try {
      runInAction(() => {
        this.potRevenueLoading = true;
        this.potRevenueError = false;
      });

      const data = await fetchPotentialRevenueData();
      if (!data || !data?.length) throw new Error('No data');

      runInAction(() => {
        this.potRevenueData = data;
        this.potRevenueLoading = false;
      });
    } catch (e) {
      runInAction(() => {
        this.potRevenueLoading = false;
        this.potRevenueError = true;
      });
    }
  };

  @action loadCloseRatiosData = async () => {
    try {
      runInAction(() => {
        this.closeRatiosLoading = true;
        this.closeRatiosError = false;
      });

      const data = await fetchCloseRatiosData();
      if (!data || !data?.length) throw new Error('No data');

      runInAction(() => {
        this.closeRatiosData = data;
        this.closeRatiosLoading = false;
      });
    } catch (e) {
      runInAction(() => {
        this.closeRatiosLoading = false;
        this.closeRatiosError = true;
      });
    }
  };
}
