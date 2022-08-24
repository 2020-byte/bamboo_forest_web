import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
import App from './app';
import PostService from './service/posts';
import HttpClient from './network/http';


const root = ReactDOM.createRoot(document.getElementById('root'));

const baseURL = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseURL);
const postService = new PostService(httpClient);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App postService={postService}/>
    </BrowserRouter>
  </React.StrictMode>
);


