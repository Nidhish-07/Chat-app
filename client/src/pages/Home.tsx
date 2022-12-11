import React from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="bg-[#a7bcff] h-[100vh] flex items-center justify-center">
      <div className="border-white border-2 w-3/5 h-4/5 flex overflow-hidden">
        <Sidebar></Sidebar>
        <Chat></Chat>
      </div>
    </div>
  );
};

export default Home;
