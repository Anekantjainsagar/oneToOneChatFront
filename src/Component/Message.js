import React, { useContext } from "react";
import Context from "../Context/Context";
import { format } from "timeago.js";

const Message = ({ data }) => {
  const context = useContext(Context);
  return (
    <div
      className={` w-2/5 py-2 px-2.5 rounded-xl m-3 ${
        data?.sender == context?.user?._id
          ? "float-right bg-blue-400"
          : "float-left bg-blue-100 text-gray-900"
      } clear-both`}
    >
      <p>{data?.content}</p>
      <p className="float-right clear-both text-sm">
        {data?.time ? format(data?.time) : null}
      </p>
    </div>
  );
};

export default Message;
