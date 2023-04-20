import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function New() {
  const [id, setid] = useState("");
  const [username, setusername] = useState("");
  const [fullname, setfullname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [country, setcountry] = useState("");
  const [adress, setadress] = useState("");
  const [gender, setgender] = useState("");
  const navigate = useNavigate();

  const notify = () => {
    toast.success("user added", {
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
  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = {
      username,
      fullname,
      password,
      email,
      phone,
      country,
      adress,
      gender,
    };

    fetch("http://localhost:3500/items", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(regobj),
    })
      .then((data) => {
        navigate("/admin/all");
        notify();
      })
      .catch((err) => {
        console.log("err : ", err.message);
      });
  };

  return (
    <div>
      <form className="container" onSubmit={handlesubmit}>
        <ToastContainer />
        <div className="card">
          <div className="card-header">
            <h1>User Registeration</h1>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    ID <span className="errmsg">*</span>
                  </label>
                  <input
                    required
                    disabled="disabled"
                    value={id}
                    onChange={(e) => setid(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    Country <span className="errmsg">*</span>
                  </label>
                  <select
                    required
                    value={country}
                    onChange={(e) => setcountry(e.target.value)}
                    className="form-control"
                  >
                    <option defaultValue>choose ???</option>
                    <option value="maroc">maroc</option>
                    <option value="usa">USA</option>
                    <option value="mali">mali</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    User Name <span className="errmsg">*</span>
                  </label>
                  <input
                    required
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    Email
                    <span className="errmsg">*</span>
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    Full Name <span className="errmsg">*</span>
                  </label>
                  <input
                    value={fullname}
                    onChange={(e) => setfullname(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    Password <span className="errmsg">*</span>
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    type="password"
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    Phone <span className="errmsg"></span>
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Address</label>
                  <textarea
                    value={adress}
                    onChange={(e) => setadress(e.target.value)}
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Gender</label>
                  <br></br>
                  <input
                    checked={gender === "male"}
                    onChange={(e) => setgender(e.target.value)}
                    type="radio"
                    name="gender"
                    value="male"
                    className="app-check"
                  ></input>
                  <label>Male</label>
                  <input
                    checked={gender === "female"}
                    onChange={(e) => setgender(e.target.value)}
                    type="radio"
                    name="gender"
                    value="female"
                    className="app-check"
                  ></input>
                  <label>Female</label>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary">
              Register
            </button>

            <Link to={"/admin/all"} className="btn btn-danger">
              Close
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default New;
