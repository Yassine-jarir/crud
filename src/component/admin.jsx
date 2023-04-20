import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Sidebar from "./Sidebar";
import "../css/admin.css";
import New from "./adminpages/new";
import All from "./adminpages/all";
import Navbar from "./Navbar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Admin() {
  return (
    <div className="row admin">
      <Navbar />
      <div className="admincontainer">
        <div
          className="col-2"
          //  style={{ width: "100%" }}
        >
          <Sidebar />
        </div>
        <div className="col-10 ">
          <Outlet />
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Admin;
