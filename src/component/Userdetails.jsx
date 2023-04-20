import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Userdetails() {
  const { userID } = useParams();

  const [user, setuser] = useState();
  useEffect(() => {
    fetch(`http://localhost:3500/items/${userID}`)
      .then((res) => res.json())
      .then((data) => {
        setuser(data);
      });
  });

  return (
    <div>
      <div
        className="row"
        style={{
          padding: "15px",
          maxWidth: "450px",
          alignContent: "center",
        }}
      >
        <p className="col-md-12 fs-3">User Detail</p>
        <hr />

        {user && (
          <p style={{ width: "100%" }} className="col-md-6 fw-bold">
            ID: <span className="spandetails">{user.id}</span>
          </p>
        )}
        <p className="col-md-6"> </p>
        {user && (
          <p style={{ width: "100%" }} className="col-md-6 fw-bold">
            Name:{" "}
            <span className="spandetails">
              {user.username} {user.fullname}
            </span>
          </p>
        )}
        <p className="col-md-6"> </p>
        {user && (
          <p className="col-md-6 fw-bold" style={{ width: "100%" }}>
            Email:{" "}
            <span className="spandetails">
              {user.email ? user.email : "---"}
            </span>{" "}
          </p>
        )}
        <p className="col-md-6"> </p>
        {user && (
          <p style={{ width: "100%" }} className="col-md-6 fw-bold">
            Contact:{" "}
            <span className="spandetails">
              {user.phone ? user.phone : "---"}
            </span>{" "}
          </p>
        )}
        <p className="col-md-6"> </p>
        {user && (
          <p style={{ width: "100%" }} className="col-md-6 fw-bold">
            Address:{" "}
            <span className="spandetails">
              {user.adress ? user.adress : "---"}
            </span>
          </p>
        )}
        <p className="col-md-6"> </p>
        {user && (
          <p style={{ width: "100%" }} className="col-md-6 fw-bold">
            Gender:{" "}
            <span className="spandetails">
              {user.gender ? user.gender : "---"}
            </span>
          </p>
        )}
        <p className="col-md-6"> </p>
        <hr />
      </div>
      <Link to="/admin/all" className="btn btn-primary">
        {" "}
        Go Back
      </Link>
    </div>
  );
}

export default Userdetails;
