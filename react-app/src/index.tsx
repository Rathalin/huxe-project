import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './graphql/apollo-client';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
