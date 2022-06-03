import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme';
import Home from './views/Home';

const App: React.FC = () => {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </div>
  );
};

export default App;
