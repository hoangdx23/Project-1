// import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store } from "./app/store"
import './index.css';
import React from 'react';
import Product from './components/products';
import Login from './components/login';
import Reginster from './components/register';
// import App from './App.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <App /> */}
        <Routes>
      <Route path='product' element={<Product/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='reginster' element={<Reginster/>}/>        
      </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
