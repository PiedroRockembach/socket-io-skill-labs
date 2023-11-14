import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Provider from './context/provider.jsx';
import { BrowserRouter } from 'react-router-dom'
import './style/login.css'
import './style/chat.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
