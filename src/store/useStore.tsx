import React, { FC, createContext, ReactNode, ReactElement } from 'react';
import { RootStore } from './index';

const store = new RootStore();

export const RootContext = createContext<RootStore>(store);

export type StoreComponent = FC<{
  children: ReactNode;
}>;

export const StoreProvider: StoreComponent = ({ children }): ReactElement => (
  <RootContext.Provider value={store}>{children}</RootContext.Provider>
);
