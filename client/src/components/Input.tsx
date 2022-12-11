import React from "react";

type Props = {};

const Input = (props: Props) => {
  return (
    <div className="h-14 bg-white p-3 flex items-center justify-between">
      <input
        type="text"
        placeholder="Type"
        className="w-full border-none outline-none text-[#2f2d52] text-lg "
      />
      <div className="flex items-center gap-3">
        <img src="" alt="" className="h-6 cursor-pointer" />
        <input type="file" className="hidden" id="files" />
        <label htmlFor="files">
          <img src="" alt="" className="h-6 cursor-pointer" />
        </label>
        <button className="border-none py-3 px-4 text-white cursor-pointer bg-[#8da4f1]">
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
