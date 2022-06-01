import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { ChakraProvider } from '@chakra-ui/react'

import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import theme from './theme';

function App() {
  const [openSideBar, setOpenSideBar] = useState(true);

  const toggleSideBar = () => setOpenSideBar(!openSideBar);

  return (
    <div className="App">
      <ChakraProvider theme={theme} >
        {/*<NavBar toggleSideBar={toggleSideBar}  />*/}
        <SideBar isOpen={openSideBar} />
      </ChakraProvider>
    </div>
  );
}

export default App;
