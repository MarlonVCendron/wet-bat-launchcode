import React from 'react';
import { Box } from '@chakra-ui/react';

import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

interface DefaultLayoutProps {
  children?: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const navBarHeight = 100;
  return (
    <>
      <NavBar height={navBarHeight} />
      <SideBar navBarHeight={navBarHeight} />
      <Box w="100%" h="full" pt={navBarHeight}>
        {children}
      </Box>
    </>
  );
};

export default DefaultLayout;
