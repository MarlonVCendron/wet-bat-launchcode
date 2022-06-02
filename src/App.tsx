import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import theme from './theme';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <NavBar />
        <Box as="main" w="full">
          <Box display={{ md: 'flex' }}>
            <SideBar />
            <Dashboard />
          </Box>
        </Box>
      </ChakraProvider>
    </div>
  );
}

export default App;
