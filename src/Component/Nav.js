import React, { useContext } from "react";
import Context from "../Context/Context";
import { useNavigate } from "react-router";

const Nav = () => {
  const context = useContext(Context);
  const history = useNavigate();
  return (
    <div className="flex justify-between items-center bg-black py-2 px-3 text-white">
      <input
        type="text"
        className="rounded-md text-center px-2 outline-none text-black py-0.5"
        placeholder="Search here..."
      />
      <h1 className="text-2xl font-bold">Chat App</h1>
      <div className="flex items-center">
        <p className="text-lg mr-2">{context?.user?.name}</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            localStorage.clear();
            history("/");
          }}
          className="bg-green-600 py-1 px-3 rounded-xl ml-2 my-2 transition-all hover:text-green-600 hover:bg-transparent"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Nav;
