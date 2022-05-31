import { ThemeProvider } from '@mui/material/styles';
import React from 'react';

import NavBar from './components/NavBar';
import theme from './theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
      </ThemeProvider>
    </div>
  );
}

export default App;
