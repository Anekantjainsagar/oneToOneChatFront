import React, { useContext } from "react";
import ChatSide from "./ChatSide";
import Context from "../Context/Context";

const Sidebar = () => {
  const context = useContext(Context);
  return (
    <div className="w-3/12 bg-black h-[92vh] text-white overflow-y-scroll">
      <div className="flex items-center justify-between px-3">
        <h1 className="text-xl font-bold">My Chats</h1>
        <button className="bg-green-600 py-1 px-3 rounded-xl my-2 transition-all hover:text-green-600 hover:bg-transparent">
          Create Group Chat
        </button>
      </div>
      {context?.allUser?.map((e) => {
        return <ChatSide data={e} />;
      })}
    </div>
  );
};

export default Sidebar;
