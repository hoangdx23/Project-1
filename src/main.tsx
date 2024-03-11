// import React from 'react';
import ReactDOM from "react-dom/client";
// import App from './App.tsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import React from "react";
// import Product from './pages/admin/products';
// import Login from './pages/user/login';
// import Reginster from './pages/user/register';
// import App from './App.tsx';
import Reginster from "./pages/user/register";
import Login from "./pages/user/login";
import AdminShell from "./components/admin-shell";
import UserShell from "./components/user-shell";
import Home from "./pages/user/home";
import ListProducts from "./components/ListProducts";
import Cart from "./pages/user/cart";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Reginster />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/admin" element={<AdminShell />}>
          {/* <Route path="add" element={<Add />} />
            <Route index element={<Product />} /> */}
        </Route>
        {/* <Route path="/admin/update/:id" element={<Update />} /> */}
        <Route path="/" element={<UserShell />}>
          {/* <Route index element={<Banner />} /> */}
        </Route>
        <Route path="home" element={<ListProducts />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
