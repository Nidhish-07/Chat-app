import React from "react";

type Props = {};

const Message = (props: Props) => {
  return (
    <div className="flex gap-5 mb-5 flex-row-reverse">
      <div className="flex flex-col text-gray-500 font-light">
        <img src="" alt="" className="w-10 h-10 rounded-[50%] object-cover" />
        <span>Just now</span>
      </div>
      <div className="max-w-[80%] flex flex-col gap-3 items-end">
        <p className="bg-white py-3 px-5 border-x-8 border-t-0 border-b-8 max-w-max bg-[#8da4f1] text-white border-r-0 border-y-8 border-l-8">
          Hello
        </p>
        <img src="" alt="" className="w-2/4" />
      </div>
    </div>
  );
};

export default Message;
