import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import theme from './theme';
import { StoreProvider } from './store/useStore';
import { Home, Quotes, EditQuote } from './views';

const App: React.FC = () => {
  return (
    <div className="App">
      <ToastContainer />
      <ChakraProvider theme={theme}>
        <StoreProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quotes" element={<Quotes />} />
              <Route path="/quote/:quoteId" element={<EditQuote />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
        </StoreProvider>
      </ChakraProvider>
    </div>
  );
};

export default App;
