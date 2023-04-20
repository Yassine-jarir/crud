import Login from "./component/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./component/admin";
import Navbar from "./component/Navbar";
import All from "./component/adminpages/all";
import "./css/index.css";
import New from "./component/adminpages/new";
import Userdetails from "./component/Userdetails";
import Edit from "./component/Edit";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import BtnSearch from "./component/adminpages/context API/context";
function App() {
  const [search, setsearch] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <BtnSearch.Provider
          value={{
            setsearch,
            search,
          }}
        >
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="admin" element={<Admin />}>
              <Route path="new" element={<New />} />
              <Route path="all" element={<All />} />
              <Route path=":userID" element={<Userdetails />} />
              <Route path="edit/:editID" element={<Edit />} />
            </Route>
          </Routes>
        </BtnSearch.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
