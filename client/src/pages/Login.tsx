import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="bg-[#a7bcff] h-[100vh] flex items-center justify-center ">
      <div className="bg-white px-8 py-16 flex flex-col gap-3 items-center rounded-lg ">
        <span className="text-[#5d5b8d] font-bold text-2xl">Chat App</span>
        <span className="text-[#5d5b8d] text-sm">Register</span>
        <form action="" className="flex flex-col gap-4">
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

          <button className="bg-[#7b96ec] text-white p-3 font-bold border-none cursor-pointer">
            Sign in
          </button>
        </form>
        <p className="text-black text-sm mt-3">Don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
