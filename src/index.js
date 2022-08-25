import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
import App from './app';
import PostService from './service/posts';
import HttpClient from './network/http';
import TokenStorage from './db/token';
import AuthService from './service/auth';
import { AuthErrorEventBus } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

const baseURL = process.env.REACT_APP_BASE_URL;
const tokenStorage = new TokenStorage();
const authErrorEventBus = new AuthErrorEventBus();
const httpClient = new HttpClient(baseURL, authErrorEventBus);
const postService = new PostService(httpClient, tokenStorage);
const authService = new AuthService(httpClient, tokenStorage);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App postService={postService} authService={authService} authErrorEventBus={authErrorEventBus} tokenStorage={tokenStorage}/>
    </BrowserRouter>
  </React.StrictMode>
);


