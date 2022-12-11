import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex items-center bg-[#2f2d52] h-14 p-3 justify-between text-[#ddddf7]">
      <div className="font-bold">Chat App</div>
      <div className="flex gap-3">
        <img src="" alt="" className="bg-[#ddddf7] h-6 w-6 rounded-[50%] object-cover"/>
        <span>Nidhish</span>
        <button className="bg-[#5d5b8d] text-[#ddddf7] text-xs border-none cursor-pointer "> Logout</button>
      </div>
    </div>
  );
};

export default Header;
