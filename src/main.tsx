import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./index.css";
import Reginster from "./pages/user/register";
import Login from "./pages/user/login";
import UserShell from "./components/user-shell";
import Home from "./pages/user/home";
import ListProducts from "./components/ListProducts";
import Cart from "./pages/user/cart";
import Payment from "./pages/user/Payment";
import ProductDetail from "./pages/controller/DetailProduct";
import AdminProduct from "./pages/admin/products/index";
import AddProduct from "./pages/admin/products/addProducts";
import User from "./pages/admin/user/ListUser"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Reginster />} />
        <Route path="cart" element={<Cart />} />
        <Route path="payment" element={<Payment />} />
        <Route path="detail" element={<ProductDetail />} />
        <Route path="/" element={<UserShell />}>
          <Route index element={<ListProducts />} />
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="/admin" element={<AdminProduct />}>
          <Route index element={<AdminProduct />} />
        </Route>
        <Route path="/user" element={<User />}>
          <Route index element={<User />} />
        </Route>
        <Route path="add-product" element={<AddProduct />} />\
        {/* <Route path="/message" element={<Message />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
