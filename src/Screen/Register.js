import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { LOGIN_URL } from "../Utils/index";

const Login = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="bg-black w-[100vw] h-[100vh] text-white flex items-center flex-col justify-center">
      <h1 className="text-2xl font-bold">Register Now</h1>
      <input
        type="text"
        className="bg-transparent border rounded-xl px-2 text-center mb-1 mt-3 text-lg outline-none"
        placeholder="Name"
        value={user.name}
        onChange={(e) => {
          setUser({ ...user, name: e.target.value });
        }}
      />
      <input
        type="text"
        className="bg-transparent border rounded-xl px-2 text-center my-1 text-lg outline-none"
        placeholder="Email address"
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
      />
      <input
        type="password"
        className="bg-transparent border rounded-xl px-2 text-center my-1 text-lg outline-none"
        placeholder="Password"
        value={user.password}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          axios
            .post(`${LOGIN_URL}/sign-up`, user)
            .then((res) => {
              console.log(res.data);
              if (res.data.length > 0) {
                alert(res.data);
              } else {
                history("/");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }}
        className="bg-green-600 py-1 px-3 rounded-xl my-2 transition-all hover:text-green-600 hover:bg-transparent"
      >
        Submit
      </button>
      <p
        className="underline cursor-pointer transition-all hover:text-gray-400"
        onClick={(e) => {
          e.preventDefault();
          history("/");
        }}
      >
        Click here to Login?
      </p>
    </div>
  );
};

export default Login;
