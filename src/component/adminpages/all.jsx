import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BtnSearch from "./context API/context";

function All() {
  const [users, setusers] = useState([]);
  const { search } = useContext(BtnSearch);
  const [select, setselect] = useState("all");
  const handleselect = (e) => {
    setselect(e.target.value);
  };
  useEffect(() => {
    getusers();
  }, []);
  const getusers = () => {
    fetch("http://localhost:3500/items")
      .then((res) => res.json())
      .then((data) => {
        setusers(data);
      });
  };
  const deletebtn = (id) => {
    Swal.fire({
      title: `DELETE ${id} ??!!`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`http://localhost:3500/items/${id}`, {
          method: "DELETE",
        }).then(() => {
          getusers();
        });
      }
    });
  };
  const handlefilter = users
    .filter((user) => {
      if (select === "all") {
        return true;
      }
      return user.country === select;
    })
    .filter((user) => {
      return user.username.toLowerCase().includes(search.toLowerCase());
    });
  return (
    <div className="all-container">
      <p className="col-md-12 fs-3">All users : {search} </p>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",

          alignItems: "center",
          paddingRight: "90px",
          marginBottom: "10px",
        }}
      >
        <Link
          to={"/admin/new"}
          className="btn btn-success"
          style={{
            marginBottom: "0",
            position: "relative",
            paddingLeft: " 28px",
          }}
        >
          <i className="fa-solid fa-user-plus"></i>
          Add new user
        </Link>
        <div
          style={{
            display: "flex",
            width: "200px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <label htmlFor="country-select" className="form-label">
            Filter by country:
          </label>
          <select
            style={{ marginRight: "19px" }}
            className="form-select"
            aria-label="Default select example"
            onChange={handleselect}
          >
            <option defaultValue value="all">
              all
            </option>
            <option value="maroc">maroc</option>
            <option value="usa">usa</option>
            <option value="mali">malsi</option>
          </select>
        </div>
      </div>
      {handlefilter.length === 0 ? (
        <h4 colSpan="7" className="text-center h4all">
          No result found....dddm
        </h4>
      ) : (
        <table className="table table-striped ">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>fullName</th>
              <th>phone</th>
              <th>gender</th>
              <th>country</th>
              <th>operation</th>
            </tr>
          </thead>
          <tbody>
            {handlefilter.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.username ? user.username : "---"}</td>
                  <td>{user.fullname ? user.fullname : "---"}</td>
                  <td>{user.phone ? user.phone : "---"}</td>
                  <td>{user.gender ? user.gender : "---"}</td>
                  <td>{user.country ? user.country : "---"}</td>
                  <td>
                    <Link
                      to={`/admin/${user.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Details
                    </Link>

                    <Link
                      className="btn btn-info btn-sm"
                      style={{
                        border: "none",
                        color: "white",
                        backgroundColor: " #198754e0",
                      }}
                      to={`/admin/edit/${user.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deletebtn(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default All;
