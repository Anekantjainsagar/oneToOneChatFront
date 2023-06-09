import React, { useEffect, useState } from "react";
import Context from "./Context";
import axios from "axios";
import { BACKEND_URI, LOGIN_URL } from "../Utils/index";

const B2BState = (props) => {
  const [user, setUser] = useState();
  const [oldMessages, setOldMessages] = useState([]);
  const [allUser, setAllUser] = useState([]);
  const [clickedUser, setClickedUser] = useState();

  const getMessages = (userId) => {
    const token = localStorage.getItem("token");
    axios.post(`${BACKEND_URI}/${userId}`, { token }).then((res) => {
      setOldMessages(res.data);
    });
  };

  const getAllUser = () => {
    const token = localStorage.getItem("token");
    axios.post(`${LOGIN_URL}/user`, { token }).then((res) => {
      setAllUser(res.data);
    });
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        getMessages,
        oldMessages,
        allUser,
        clickedUser,
        setClickedUser,
        getAllUser,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default B2BState;
