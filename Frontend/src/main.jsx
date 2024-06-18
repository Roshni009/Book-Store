import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthorProvider from './context/AuthorProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthorProvider>
  <App />
  </AuthorProvider>

</BrowserRouter>
  
  
);
