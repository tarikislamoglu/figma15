"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { FaUserAlt, FaEye, FaEyeSlash, FaPhoneAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const isExisting = users.some((u) => u.userName === userName);
    if (isExisting) {
      alert("Bu kullanıcı adı zaten mevcut.");
      router.push("/");
      return;
    }

    const newUser = {
      userName,
      emailAddress,
      password,
      phoneNumber,
      id: crypto.randomUUID(),
    };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    setUserName("");
    setEmailAddress("");
    setPhoneNumber("");
    setPassword("");
    setIsChecked(false);

    router.push("/");
  };

  return (
    <div className="flex flex-col md:flex-row md:min-h-dvh min-h-screen max-w-full ">
      <img
        src="/desktop2.jpg"
        alt=""
        className="md:w-3/5 w-full h-48 md:h-auto object-cover"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-4 md:p-8 md:w-2/5 w-full space-y-5 justify-center"
      >
        <h2 className="font-bold text-[37px] text-[#4A7A4C]">Sign Up</h2>
        <div className="relative">
          <span>
            <FaUserAlt className="text-[#544E4E] absolute top-2 left-2 pointer-events-none" />
          </span>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="text-[#A7A7A7] border-2 border-[#777777] rounded-md px-7 py-1 w-full"
          />
        </div>
        <div className="relative">
          <span>
            <IoMdMail className="text-[#544E4E] absolute top-2 left-2 pointer-events-none" />
          </span>
          <input
            type="email"
            placeholder="Email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            required
            className="text-[#A7A7A7] border-2 border-[#777777] rounded-md px-7 py-1 w-full"
          />
        </div>
        <div className="relative">
          <span>
            <FaPhoneAlt className="text-[#544E4E] absolute top-2 left-2 pointer-events-none" />
          </span>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
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
            required
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
        <div className="">
          <input
            type="checkbox"
            className="mr-2"
            required
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
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
