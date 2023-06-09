import React, { useContext } from "react";
import Context from "../Context/Context";

const Nav = () => {
  const context = useContext(Context);
  return (
    <div className="flex justify-between items-center bg-black py-2 px-3 text-white">
      <input
        type="text"
        className="rounded-md text-center px-2 outline-none text-black py-0.5"
        placeholder="Search here..."
      />
      <h1 className="text-2xl font-bold">Chat App</h1>
      <p className="text-lg mr-2">{context?.user?.name}</p>
    </div>
  );
};

export default Nav;
