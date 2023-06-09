import React, { useContext, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import Login from "./Screen/Login";
import Register from "./Screen/Register";
import Home from "./Screen/Home";
import Context from "./Context/Context";
import axios from "axios";
import { LOGIN_URL } from "./Utils/index";

const App = () => {
  const context = useContext(Context);
  const history = useNavigate();
  const location = useLocation();

  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.post(`${LOGIN_URL}/checkToken`, { token }).then((response) => {
        context.setUser(response.data);
      });
    } else {
      history("/");
    }
  };

  useEffect(() => {
    if (location.pathname !== "/register" && location.pathname !== "/") {
      checkToken();
    }
  }, [localStorage, history]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
};

export default App;
