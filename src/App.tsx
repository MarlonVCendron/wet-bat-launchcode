import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme';
import { StoreProvider } from './store/useStore';
import { Home, Quotes } from './views';

const App: React.FC = () => {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <StoreProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quotes" element={<Quotes />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
        </StoreProvider>
      </ChakraProvider>
    </div>
  );
};

export default App;
