import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import theme from './theme';

function App() {
  const [openSideBar, setOpenSideBar] = useState(true);

  const toggleSideBar = () => setOpenSideBar(!openSideBar);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar toggleSideBar={toggleSideBar}  />
        <SideBar open={openSideBar} />
      </ThemeProvider>
    </div>
  );
}

export default App;
