import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./layouts/header";
import Footer from "./layouts/footer";

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
