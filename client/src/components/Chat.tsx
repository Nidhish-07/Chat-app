import React from "react";
import Input from "./Input";
import Messages from "./Messages";

type Props = {};

const Chat = (props: Props) => {
  return (
    <div className="flex-[2]">
      <div className="h-14 bg-[#5d5b8d] flex items-center justify-between p-3 text-gray-500">
        <span>Nidhish</span>
        <div className="flex gap-3">
          <img src="" alt="" className="h-6 cursor-pointer" />
          <img src="" alt="" className="h-6 cursor-pointer" />
          <img src="" alt="" className="h-6 cursor-pointer" />
        </div>
      </div>
        <Messages></Messages>
        <Input></Input>
    </div>
  );
};

export default Chat;
