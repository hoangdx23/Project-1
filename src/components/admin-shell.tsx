import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./footer";
import Dashboard from "./dashboard";

const AdminShell = () => {
  return (
    <div>

      <main className=" min-h-screen max-w-5xl mx-auto p-0 " >
        <Outlet />
        <Dashboard></Dashboard>
      </main>
      <Footer></Footer>
    </div>
  );
};
export default AdminShell;
