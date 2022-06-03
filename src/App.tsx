import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme';
import Home from './views/Home';
import { StoreProvider } from './store/useStore';

const App: React.FC = () => {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <StoreProvider>
          <Home />
        </StoreProvider>
      </ChakraProvider>
    </div>
  );
};

export default App;
