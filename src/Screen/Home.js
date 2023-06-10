import React, { useContext, useEffect } from "react";
import Nav from "../Component/Nav";
import Sidebar from "../Component/Sidebar";
import Main from "../Component/Main";
import NoChat from "../Component/NoChat";
import Context from "../Context/Context";

const Home = () => {
  const context = useContext(Context);
  useEffect(() => {
    context.getAllUser();
  }, [context]);

  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        {context?.clickedUser?.name === undefined ? <NoChat /> : <Main />}
      </div>
    </div>
  );
};

export default Home;
