import { Fragment, ReactElement } from 'react';
import { useAppLifeCycles } from '../hooks/LifeCycles/useAppLifeCycles';

export const AppLifeCycle = (): ReactElement => {
  useAppLifeCycles();

  return <Fragment />;
};
