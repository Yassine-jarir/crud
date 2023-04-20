import React from "react";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Sidebar() {
  const [activebtn, setactivebtn] = useState(1);

  const btnhandle = (jsxindex) => {
    setactivebtn(jsxindex);
  };
  return (
    <div className="sidebar-container">
      <ul
        className="list-unstyled sidebar"
        // style={{
        //   width: "100%",
        //   display: "flex",
        //   flexDirection: "row",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   gap: "21px",
        //   height: "100px",
        // }}
      >
        <li>
          <Link
            className={`btn btn-light ${activebtn === 1 ? "active" : null}`}
            onClick={() => btnhandle(1)}
            to={"/admin/all"}
          >
            all users
          </Link>
        </li>
        <li>
          <Link
            className={`btn btn-light ${activebtn === 2 ? "active" : null}`}
            onClick={() => btnhandle(2)}
            // to={"/admin/new"}
          >
            serach
          </Link>
        </li>
      </ul>
      {/* <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "280px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use href="#bootstrap" />
          </svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <svg className="bi me-2" width="16" height="16">
                <use href="#home" />
              </svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use href="#speedometer2" />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use href="#table" />
              </svg>
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use href="#grid" />
              </svg>
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use href="#people-circle" />
              </svg>
              Customers
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}

export default Sidebar;
