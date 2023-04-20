import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BtnSearch from "./adminpages/context API/context";
function Navbar() {
  const { setsearch } = useContext(BtnSearch);
  const handlesearch = (e) => {
    e.preventDefault();
  };
  const handleh = (e) => {
    setsearch(e.target.value);
  };
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary border-bottom box-shadow py-3 "
      style={{
        padding: "8px 80px",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          WEBAPP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navb`barSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="#"
                to="/"
              >
                home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/all">
                all users
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                search
              </a>
            </li>
          </ul>

          <form className="d-flex" role="search" onSubmit={handlesearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleh}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
