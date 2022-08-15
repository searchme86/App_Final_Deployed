import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './Store/index';

import Font from './Assets/Fonts/Font';
import GlobalStyle from './Assets/Styles/GlobalStyle';
import { ChakraProvider } from '@chakra-ui/react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <Font />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ChakraProvider>
);
