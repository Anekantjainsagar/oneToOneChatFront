import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import ScrollToBottom from "react-scroll-to-bottom";
import { io } from "socket.io-client";
import Context from "../Context/Context";
const socket = io("https://socketonetoonechat.onrender.com");

const Main = () => {
  const context = useContext(Context);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    socket.emit("connection");
    socket.emit("join", { userId: context?.user?._id });
  }, [context?.user]);

  useEffect(() => {
    context.getMessages(context?.clickedUser?._id);
  }, [context?.clickedUser]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const handleMessageSubmit = (e) => {
    e.preventDefault();

    if (messageInput.trim() === "") {
      return;
    }
    // Send message to the server
    socket.emit("message", {
      from: context?.user?._id,
      to: context?.clickedUser?._id,
      text: messageInput,
    });
    setMessageInput("");
  };

  console.log(messages);

  return (
    <div className="w-9/12 bg-black text-white px-2 border border-gray-800">
      <div className="p-1 text-2xl">{context?.clickedUser?.name}</div>
      <div className="bg-gray-900 h-[83vh] rounded-lg mt-1">
        <ScrollToBottom className="h-[75vh] overflow-y-scroll">
          {context.oldMessages.map((e) => {
            return <Message data={e} />;
          })}
          {messages
            .filter((e) => {
              return (
                (e.sender === context?.user?._id &&
                  e.receiver === context?.clickedUser?._id) ||
                (e.sender === context?.user?._id &&
                  e.receiver === context?.clickedUser?._id)
              );
            })
            .map((e) => {
              return <Message data={e} />;
            })}
        </ScrollToBottom>
        <div className="flex items-center justify-evenly">
          <input
            type="text"
            value={messageInput}
            onChange={(e) => {
              setMessageInput(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleMessageSubmit(e);
              }
            }}
            className="w-11/12 outline-none text-black rounded-lg py-0.5 px-3"
            placeholder="Enter the message here"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              handleMessageSubmit(e);
            }}
            className="bg-green-600 py-1 px-3 rounded-xl my-2 transition-all hover:text-green-600 hover:bg-transparent"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
