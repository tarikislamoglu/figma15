"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Livestock = () => {
  const [addCattle, setAddCattle] = useState(false);
  const [newFarm, setNewFarm] = useState(false);
  const pathname = usePathname();
  const getLinkClass = (path) => {
    return `block  py-2  transition text-center ${
      pathname === path
        ? "bg-white text-[#4A7A4C]"
        : "hover:bg-[#619a65] text-white"
    }`;
  };

  return (
    <div className="min-h-screen w-full bg-[#4A7A4C] flex ">
      <div className="min-w-1/5 h-screen text-white pb-10 flex flex-col items-center justify-around">
        <div className="flex flex-col items-center justify-center">
          <img
            src="/avatar.jpg"
            className="rounded-full border-4 border-white w-[123px] h-[123px]"
          />
          <h3 className="font-bold">Namık Korona</h3>
          <p className="text-[12px]">farm owner</p>
        </div>
        <ul className="font-bold text-[23px] space-y-3 w-full">
          <li>
            <Link
              href="/farmanalytics"
              className={getLinkClass("/farmanalytics")}
            >
              Farm Analytics
            </Link>
          </li>
          <li>
            <Link href="/livestock" className={getLinkClass("/livestock")}>
              Livestock
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className={getLinkClass("/dashboard")}>
              Dashboard
            </Link>
          </li>
        </ul>
        <button
          className="bg-white text-[#4A7A4C] w-3/4 font-bold rounded-md p-3 "
          onClick={() => setNewFarm(true)}
        >
          + Add Farm
        </button>
      </div>
      <div className="bg-white rounded-lg min-h-screen w-full m-2 ml-0 text-[#4A7A4C] space-y-3 relative p-5 font-bold">
        <div className="flex md:justify-between md:items-baseline md:flex-row flex-col items-center">
          <h2 className="text-[35px] font-bold">Manage Livestock</h2>
          <div className="flex p-5">
            <div className="bg-[#4A7A4C] flex mx-2 rounded-md p-2 space-x-1">
              <img src="/view.png" />
              <button className=" text-white ">View Live</button>
            </div>

            <button
              className="bg-[#4A7A4C] text-white rounded-md p-2"
              onClick={() => setAddCattle(true)}
            >
              + Add Cattle
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:justify-end">
          <div className="bg-[#4A7A4C] p-2 rounded-md text-white mx-2 px-5">
            <p className="text-center">
              Total:<span className="px-5">63</span>
            </p>
          </div>
          <div className="bg-[#4A7A4C] p-2 rounded-md text-white mx-2 px-5">
            <p className="text-center">
              Area:<span className="px-2">25 Acres</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row md:space-x-2 md:py-5 font-bold  ">
          <div className=" w-full lg:w-1/3 md:w-1/2 md:p-2 rounded-md shadow-md space-y-3">
            <h3>Goat:</h3>
            <ul className="pl-2">
              <li>Count:</li>
              <li>Breed:</li>
              <li>Males:</li>
              <li>Females:</li>
            </ul>
            <div className="relative">
              <img src="/goat.png" className="w-full" />
              <p className="absolute top-1/2 left-1/2 text-2xl text-white font-bold">
                +5
              </p>
            </div>
          </div>
          <div className=" w-full lg:w-1/3 md:w-1/2 md:p-2 rounded-md shadow-md space-y-3">
            <h3>Cow:</h3>
            <ul className="pl-2">
              <li>Count:</li>
              <li>Breed:</li>
              <li>Males:</li>
              <li>Females:</li>
            </ul>
            <div className="relative">
              <img src="/cow.png" className="w-full" />
              <p className="absolute top-1/2 left-1/2 text-2xl text-white font-bold">
                +2
              </p>
            </div>
          </div>
        </div>
        {addCattle && (
          <div className="absolute top-5 left-10 p-5 w-4/5 h-4/5 bg-white shadow-xl ">
            <button
              className="border-2 border-[#4A7A4C] text-[#4A7A4C] bg-white p-1 rounded-md cursor-pointer font-bold"
              onClick={() => setAddCattle(false)}
            >
              Back
            </button>
            <div className="flex flex-col space-y-5 w-full p-15">
              <h2 className="text-[#4A7A4C] text-[35px] font-bold text-center">
                CATTLE DETAİLS
              </h2>
              <form className="flex flex-col space-y-8 w-full items-center justify-center">
                <div className="flex w-full space-x-2 justify-center">
                  <img src="/cattle.png" width={24} height={24} />
                  <input
                    className="border-1 rounded-md w-2/3 p-1"
                    placeholder="Enter the Cattle Type"
                  />
                </div>
                <div className="flex w-full space-x-2 justify-center">
                  <input
                    className="border-1 rounded-md w-2/3 p-1"
                    placeholder="Enter the Breed "
                  />
                </div>
                <div className="flex w-full space-x-2 justify-center">
                  <img src="/count.png" width={24} height={24} />
                  <input
                    className="border-1 rounded-md w-2/3 p-1"
                    placeholder="Count "
                  />
                </div>
                <div className="relative w-2/3 justify-center">
                  <img
                    src="/addimage.png"
                    width={25}
                    height={25}
                    className="right-1 top-1 absolute"
                  />
                  <input
                    className="border-1 rounded-md w-full p-1"
                    placeholder="Images"
                  />
                </div>
                <div className="flex w-full space-x-2 justify-center">
                  <select className="border-1 rounded-md w-2/3 p-1">
                    <option>Male/Female</option>
                  </select>
                </div>

                <button
                  className="bg-[#4A7A4C] text-white w-1/3 p-1 rounded-md self-center font-bold cursor-pointer"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
        {newFarm && (
          <div className="absolute top-5 left-10 p-5 w-4/5 h-4/5 bg-white shadow-xl ">
            <button
              className="border-2 border-[#4A7A4C] text-[#4A7A4C] bg-white p-1 rounded-md cursor-pointer font-bold"
              onClick={() => setNewFarm(false)}
            >
              Back
            </button>
            <div className="flex flex-col space-y-5 w-full p-15">
              <h2 className="text-[#4A7A4C] text-[35px] font-bold text-center">
                FARM DETAİLS
              </h2>
              <form className="flex flex-col space-y-8 w-full items-center justify-center">
                <div className="flex w-full space-x-2 justify-center">
                  <img src="/farmn.png" width={25} height={25} />
                  <input
                    className="border-1 rounded-md w-2/3 p-1"
                    placeholder="Farm Name"
                  />
                </div>
                <div className="flex w-full space-x-2 justify-center">
                  <img src="/size.png" width={25} height={25} />
                  <input
                    className="border-1 rounded-md w-2/3 p-1"
                    placeholder="Farm Size (in acres)"
                  />
                </div>
                <div className="relative w-1/3 ">
                  <img
                    src="/addimage.png"
                    width={25}
                    height={25}
                    className="right-1 top-1 absolute"
                  />
                  <input
                    className="border-1 rounded-md w-full p-1"
                    placeholder="Farm Image"
                  />
                </div>
                <div className="flex w-full space-x-2 justify-center">
                  <img src="/type.png" width={25} height={25} />
                  <select className="border-1 rounded-md w-2/3 p-1">
                    <option>Crop Type</option>
                  </select>
                </div>

                <button
                  className="bg-[#4A7A4C] text-white w-1/3 p-1 rounded-md self-center font-bold"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Livestock;
