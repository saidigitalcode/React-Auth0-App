import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-tbvg0u76pp8osw76.us.auth0.com"
    clientId="mYmrNNHhMRoPuSqaDa78KnX0jAu11ELF"
authorizationParams={{
  redirect_uri: window.location.origin
}}

  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);
