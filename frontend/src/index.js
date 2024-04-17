import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BookPage from './pages/book-page/book-page';
import ConfirmPage from './pages/confirm-page/confirm-page';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<BookPage />} />
          <Route path='confirm' element={<ConfirmPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
