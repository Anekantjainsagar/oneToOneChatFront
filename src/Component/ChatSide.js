import React, { useContext } from "react";
import Context from "../Context/Context";

const ChatSide = ({ data }) => {
  const context = useContext(Context);
  return (
    <div
      className="bg-gray-900 text-white my-2 mx-2 rounded-lg py-1 px-3 cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        context.setClickedUser(data);
      }}
    >
      <h1 className="font-semibold">{data?.name}</h1>
      <p className="text-sm">{data?.email}</p>
    </div>
  );
};

export default ChatSide;
