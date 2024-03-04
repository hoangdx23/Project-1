import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const ListProducts = () => {
  return (
    <div>
    <Header></Header>
      <main className="w-1000">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default ListProducts;
