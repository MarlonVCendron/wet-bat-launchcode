import React from 'react';

import Dashboard from '../components/Dashboard';
import DefaultLayout from '../layouts/Default';

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <Dashboard />
    </DefaultLayout>
  );
};

export default Home;
