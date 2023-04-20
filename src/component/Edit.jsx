import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

console.log("sd");
function Edit() {
  const { editID } = useParams();
  const navigate = useNavigate();
  const [id, setid] = useState("");
  const [username, serusername] = useState("");
  const [fullname, setfullname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [country, setcountry] = useState("");
  const [adress, setadress] = useState("");
  const [gender, setgender] = useState("");

  const notify = () => {
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

  const [user, setuser] = useState();
  useEffect(() => {
    fetch(`http://localhost:3500/items/${editID}`)
      .then((res) => res.json())
      .then((data) => {
        serusername(data.username);
        setfullname(data.fullname);
        setpassword(data.password);
        setemail(data.email);
        setphone(data.phone);
        setcountry(data.country);
        setadress(data.adress);
        setgender(data.gender);
      });
  }, []);

  const handlesubmitt = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3500/items/${editID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(regobj),
    })
      .then((res) => {
        notify();
        navigate("/admin/all");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <form className="container" onSubmit={handlesubmitt}>
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
                    <option defaultValue value="">
                      choose ???
                    </option>
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
                    onChange={(e) => serusername(e.target.value)}
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
              <div className="col-lg-6">
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
export default Edit;
