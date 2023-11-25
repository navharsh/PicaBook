import React from "react";

import { signIn } from "next-auth/react";

import { AiOutlineAliwangwang } from "react-icons/ai";

import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="grid h-screen">
      <div className="bg-secondary w-screen grid place-items-center">
        <AiOutlineAliwangwang className="text-white text-[400px]" />
        <div className="text-white text-6xl font-bold font-sans" >PicaBook</div>
        </div>
        <div className="grid place-items-center bg-secondary">
        <div
          className="flex gap-2 bg-[#fff] p-4 px-6  items-center rounded-[6px] cursor-pointer"
          onClick={() => signIn("google")}
        >
          <FcGoogle className="text-[30px]" />
          SignIn with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
