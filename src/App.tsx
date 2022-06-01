import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react'

import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import theme from './theme';

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme} >
        <NavBar />
        <Box as='main' w='full'>
          <Box display={{ md: 'flex' }}>
            <SideBar/>
            <Box bg="teal" m="5" w="200px" h="200px"  />
          </Box>
        </Box>
      </ChakraProvider>
    </div>
  );
}

export default App;
