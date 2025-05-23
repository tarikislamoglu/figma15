"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { FaUserAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Home() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (u) => u.userName === userName && u.password === password
    );

    if (matchedUser) {
      alert("Giriş başarılı!");
      router.push("/dashboard");
    } else {
      alert("Kullanıcı adı veya şifre hatalı.");
    }
    setUserName("");
    setPassword("");
    setIsChecked(false);
  };
  return (
    <div className="flex min-h-screen max-w-full ">
      <img src="/desktop1.jpg" alt="" className="w-3/5 h-[1024px]" />
      <div className="flex flex-col p-8 w-2/5  justify-center space-y-5">
        <form className="space-y-5" onSubmit={handleLogin}>
          <h2 className="font-bold text-[37px] text-[#4A7A4C]">Sign In</h2>
          <div className="relative">
            <span>
              <FaUserAlt className="text-[#544E4E] absolute top-2 left-2 pointer-events-none" />
            </span>
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="text-[#A7A7A7] border-2 border-[#777777] rounded-md px-7 py-1 w-full"
            />
          </div>
          <div className="relative w-full">
            <span>
              <RiLockPasswordFill className="text-[#544E4E]  absolute top-2 left-2 pointer-events-none" />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-[#A7A7A7] border-2 border-[#777777] rounded-md px-7 py-1 w-full"
            />
            <span>
              {showPassword ? (
                <FaEye
                  className="text-[#544E4E]  absolute top-2 right-2 cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <FaEyeSlash
                  className="text-[#544E4E]  absolute top-2 right-2 cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </span>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-2"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
            />
            <span className="text-[16px]">
              I agree
              <span className="font-bold">
                <a href="#">Terms and Conditions & Private Policy </a>
              </span>
              by Signing in
            </span>
          </div>
          <div className="flex flex-col space-y-5 px-4 pt-16">
            <button
              type="submit"
              className="bg-[#308B34] text-[#FFFFFF] font-bold text-[27px] rounded-md p-0.5 cursor-pointer"
            >
              Log In
            </button>
          </div>
        </form>
        <button
          className="text-[#308B34] bg-[#FFFFFF] font-bold text-[27px] rounded-md border-[#308B34] border-2 cursor-pointer mx-4"
          onClick={() => router.push("/signup")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
