import React from 'react';
import { Box } from '@chakra-ui/react';

import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

interface DefaultLayoutProps {
  children?: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const sideBarWidth = 200;
  const navBarHeight = 100;
  return (
    <>
      <NavBar height={navBarHeight} />
      <SideBar width={sideBarWidth} navBarHeight={navBarHeight} />
      <Box w="full" height="fit-content" pl={sideBarWidth} pt={navBarHeight}>
        {children}
      </Box>
    </>
  );
};

export default DefaultLayout;
