import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const notif = () => {
    toast.success("🦄 edit success", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const processLogin = (e) => {
    e.preventDefault();
    if (validation()) {
      fetch("http://localhost:3500/items/")
        .then((res) => res.json())
        .then((data) => {
          const user = data.find(
            (data) => data.id === username && data.password === password
          );

          if (user) {
            console.log("object");
          } else if (username.trim() === "admin" && password.trim() === "aaa") {
            console.log("object");
            notif();
            navigate("/admin/all");
          } else {
            console.log(" false");
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };
  const validation = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;

      toast.warn("please enter name", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    if (password === "" || password === null) {
      result = false;
      toast.warn("please enter pass", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    return result;
  };

  return (
    <div className="box">
      <div className="container" style={{ width: "400px" }}>
        <div className="top">
          <header>Login</header>
        </div>
        <form onSubmit={processLogin}>
          <ToastContainer />

          <div className="input-field">
            <input
              type="text"
              className="input"
              placeholder="Username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
            <i className="fa-solid fa-user"></i>
          </div>

          <div className="input-field">
            <input
              type="Password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />

            <i className="fa-solid fa-lock"></i>
          </div>

          <div className="input-field">
            <input type="submit" className="submit" value="Login" />
          </div>
          <div className="two-col">
            <div className="one">
              <input type="checkbox" name="" id="check" />
              <label htmlFor="check"> Remembderd Me</label>
            </div>
            <div className="two">
              <label>
                <a href="#">Forgott password?</a>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
