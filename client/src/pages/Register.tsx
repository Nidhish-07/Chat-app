import React from "react";
import AddImage from "../assets/image.png";

type Props = {};

const Register = (props: Props) => {
  return (
    <div className="bg-[#a7bcff] h-[100vh] flex items-center justify-center ">
      <div className="bg-white px-8 py-16 flex flex-col gap-3 items-center rounded-lg ">
        <span className="text-[#5d5b8d] font-bold text-2xl">Chat App</span>
        <span className="text-[#5d5b8d] text-sm">Register</span>
        <form action="" className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-4 border-none w-64 text-gray-400 border-b-2 border-b-[#a7bcff]"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 border-none w-64 text-gray-400 border-b-2 border-b-[#a7bcff]"
          />
          <input
            type="password"
            placeholder="password"
            className="p-4 border-none w-64 text-gray-400 border-b-2 border-b-[#a7bcff]"
          />
          <input
            type="file"
            placeholder="Image"
            className="p-4 border-none w-64 text-gray-400 border-b-2 border-b-[#a7bcff] hidden"
            id="img"
          />
          <label
            htmlFor="img"
            className="flex items-center gap-3 text-[#8da4f1] text-sm cursor-pointer justify-start "
          >
            <img src={AddImage} alt="image add" className="w-8 ml-5" />
            <span>Add an avatar</span>
          </label>
          <button className="bg-[#7b96ec] text-white p-3 font-bold border-none cursor-pointer">
            Signup
          </button>
        </form>
        <p className="text-black text-sm mt-3">Have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
