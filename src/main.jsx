import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 1. Redux Provider'ı ve oluşturduğumuz store'u içeri aktar
import { Provider } from 'react-redux';
import { store } from './Redux/Store'; // store.js dosyanın yolu (klasör yapına göre kontrol et)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. App bileşenini Provider içine al ve store'u ver */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);