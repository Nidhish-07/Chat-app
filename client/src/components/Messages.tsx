import React from "react";
import Message from "./Message";

type Props = {};

const Messages = (props: Props) => {
  return (
    <div className="bg-[#ddddb7] p-3 h-[100%_-_160px] overflow-scroll">
      <Message></Message>
      <Message></Message>
      <Message></Message>
      <Message></Message>
      <Message></Message>
    </div>
  );
};

export default Messages;
