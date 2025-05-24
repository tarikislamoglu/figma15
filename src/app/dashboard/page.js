"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
const DashBoard = () => {
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
            className="rounded-full border-4 border-white w-[123px] h-[123px] "
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
      <div className="bg-white rounded-lg min-h-screen w-full m-2 ml-0 p-5 text-[#4A7A4C] font-bold space-y-5 relative">
        <div className=" flex flex-col items-center md:flex-row md:justify-between">
          <h2 className="text-[35px] ">Manage Livestock</h2>
          <div className="flex p-3 bg-[#4A7A4C] items-center space-x-2 rounded-md">
            <img src="/view.png" className="" />
            <button className=" text-white rounded-md ">View Live</button>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <p>Farms:</p>
          <p>Area:</p>
          <p>Expected date of Harvest:</p>
        </div>
        <div className="flex justify-around items-center">
          <h3 className="text-[#4A7A4C] w-1/2 md:w-full text-center ">
            Crops Distribution
          </h3>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 items-center ">
          <div className="w-full md:w-1/2">
            <div className="relative h-full ">
              <img src="/location.jpg" className="h-full w-full" />
              <div className="absolute right-2 bottom-2 bg-white  rounded-md flex items-center justify-center">
                <IoLocationSharp />
                Location
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-black font-bold border-1 p-5 rounded-md shadow-xl">
            <div className="flex flex-col space-y-10">
              <div className="flex space-x-5 h-1/2 justify-between">
                <div className="border-4 rounded-full w-[150px] h-[150px] flex justify-center items-center">
                  23Acres
                </div>
                <ul className="space-y-3 w-1/2 flex flex-col justify-center">
                  <li className="flex space-x-5">
                    <div className="w-[19px] h-[19px] rounded-full bg-[#FF9494]"></div>
                    <span>Wheat</span>
                  </li>
                  <li className="flex space-x-5">
                    <div className="w-[19px] h-[19px] rounded-full bg-[#0066C5]"></div>
                    <span>Corn</span>
                  </li>
                  <li className="flex space-x-5">
                    <div className="w-[19px] h-[19px] rounded-full bg-[#FF0000]"></div>
                    <span>Barley</span>
                  </li>
                  <li className="flex space-x-5">
                    <div className="w-[19px] h-[19px] rounded-full bg-[#60A662]"></div>
                    <span>Paddy</span>
                  </li>
                </ul>
              </div>
              <ul className="space-y-3 border-t-1 p-5">
                <li className="flex space-x-5">
                  <div className="w-[19px] h-[19px] rounded-full bg-[#FF9494]"></div>
                  <p>Wheat</p>
                  <p className="text-[#FF9494]">%40</p>
                  <p className="text-[#60A662] border-[#60A662] border-2 rounded-md p-0.5 text-sm">
                    Ready
                  </p>
                </li>
                <li className="flex space-x-5">
                  <div className="w-[19px] h-[19px] rounded-full bg-[#0066C5]"></div>
                  <p>Corn</p>
                  <p className="text-[#0066C5]">%10</p>
                  <p className="text-[#FF0000] border-[#FF0000] border-2 rounded-md p-0.5 text-sm">
                    Not Ready
                  </p>
                </li>
                <li className="flex space-x-5">
                  <div className="w-[19px] h-[19px] rounded-full bg-[#FF0000]"></div>
                  <p>Barley</p>
                  <p className="text-[#FF0000]">%30</p>
                  <p className="text-[#60A662] border-[#60A662] border-2 rounded-md p-0.5 text-sm">
                    Ready
                  </p>
                </li>
                <li className="flex space-x-5">
                  <div className="w-[19px] h-[19px] rounded-full bg-[#60A662]"></div>
                  <p>Paddy</p>
                  <p className="text-[#60A662]">%0</p>
                  <p className="text-[#60A662] border-[#60A662] border-2 rounded-md p-0.5 text-sm">
                    Ready
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {newFarm && (
          <div className="absolute top-15 left-25 p-5 w-4/5 h-4/5 bg-white shadow-xl ">
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

export default DashBoard;
