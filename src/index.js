import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
import App from './app';
import PostService from './service/posts';


const root = ReactDOM.createRoot(document.getElementById('root'));

const baseURL = process.env.REACT_APP_BASE_URL;
const postService = new PostService(baseURL);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App postService={postService}/>
    </BrowserRouter>
  </React.StrictMode>
);


