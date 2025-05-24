"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const FarmAnalytics = () => {
  const [addCrop, setAddCrop] = useState(false);
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
            width={123}
            height={123}
            className="rounded-full border-4 border-white "
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
          className="bg-white text-[#4A7A4C] w-3/4 font-bold rounded-md p-3"
          onClick={() => setNewFarm(true)}
        >
          + Add Farm
        </button>
      </div>
      <div className="bg-white rounded-lg min-h-screen w-full m-2 ml-0 flex flex-col p-10 space-y-5 font-bold text-[#4A7A4C] relative">
        <div className="flex justify-between  ">
          <h2 className=" text-[35px]">Farm 1</h2>
          <button
            className="px-3 py-1 font-bold text-white bg-[#4A7A4C] rounded-md cursor-pointer"
            onClick={() => setAddCrop(true)}
          >
            +Add Crop
          </button>
        </div>
        <div className=" w-full flex justify-around space-x-5">
          <div className="flex justify-between w-1/3 shadow-md p-2 rounded-md">
            <div className="flex flex-col ">
              <h3>Nitrogen:</h3>
              <p className="border-2 rounded-md text-xs text-center text-[#00A707] w-[50px]">
                Good
              </p>
            </div>
            <div className="flex justify-center items-center text-black">
              20%
            </div>
          </div>
          <div className="flex justify-between  w-1/3 shadow-md p-2 rounded-md">
            <div className="flex flex-col">
              <h3>Phosphorus:</h3>
              <p className="border-2 rounded-md text-xs text-center text-[#00A707]  w-[50px]">
                Good
              </p>
            </div>
            <div className="flex justify-center items-center text-black">
              8%
            </div>
          </div>
          <div className="flex justify-between  w-1/3 shadow-md p-2 rounded-md">
            <div className="flex flex-col">
              <h3>Potassium:</h3>
              <p className="border-2 rounded-md text-xs text-center text-[#00A707]  w-[50px]">
                Good
              </p>
            </div>
            <div className="flex justify-center items-center text-black">
              13%
            </div>
          </div>
        </div>
        <div className="w-full flex p-10 space-x-5">
          <div className="flex flex-col w-1/2 space-y-3">
            <div className="flex justify-between shadow-md p-2 rounded-md">
              <div className="flex flex-col ">
                <h3>Humudity:</h3>
                <p className="border-2 rounded-md text-xs text-center text-[#00A707] w-[50px]">
                  Good
                </p>
              </div>
              <div className="flex justify-center items-center text-black">
                15%
              </div>
            </div>
            <div className="flex justify-between shadow-md p-2 rounded-md">
              <div className="flex flex-col">
                <h3>Soil Hydration:</h3>
                <p className="border-2 rounded-md text-xs text-center text-[#A10000] w-[50px]">
                  High
                </p>
              </div>
              <div className="flex justify-center items-center text-black">
                40%
              </div>
            </div>
            <div className="flex justify-between shadow-md p-2 rounded-md">
              <div className="flex flex-col">
                <h3>PH Value:</h3>
                <p className="border-2 rounded-md text-xs text-center text-[#C5B100] w-[50px]">
                  Low
                </p>
              </div>
              <div className="flex justify-center items-center text-black">
                4
              </div>
            </div>
          </div>
          <div className="w-1/2 flex-col flex">
            <img src="/farm.jpg" className="rounded-md max-h-[360px] w-full " />
            <div className="flex justify-around space-x-2">
              <div className="flex items-center justify-center space-x-2 border-2 rounded-full mt-2">
                <img src="/crop.png" width={24} height={24} />
                <span>Crop:</span>
                <span className="text-black">Wheat</span>
              </div>
              <div className="flex items-center justify-center  space-x-2 border-2 rounded-full mt-2 p-2">
                <img
                  src="/hector.png"
                  width={24}
                  height={24}
                  className="bg-[#4A7A4C]"
                />
                <span>Area:</span>
                <span className="text-black">25Acres</span>
              </div>
            </div>
          </div>
        </div>
        <button className="border-4 border-[#4A7A4C] text-[#4A7A4C] py-2 font-bold cursor-pointer rounded-md">
          Efficancy Rating
        </button>
        {addCrop && (
          <div className="absolute top-15 left-25 p-5 w-4/5 h-4/5 bg-white shadow-xl ">
            <button
              className="border-2 border-[#4A7A4C] text-[#4A7A4C] bg-white p-1 rounded-md cursor-pointer font-bold"
              onClick={() => setAddCrop(false)}
            >
              Back
            </button>
            <div className="flex flex-col space-y-5 w-full p-15">
              <h2 className="text-[#4A7A4C] text-[35px] font-bold text-center">
                CROP DETAİLS
              </h2>
              <form className="flex flex-col space-y-8 w-full items-center justify-center">
                <div className="flex w-full space-x-2 justify-center">
                  <img src="/crop.png" width={25} height={25} />
                  <select className="border-1 rounded-md w-2/3">
                    <option>Crop Name</option>
                  </select>
                </div>
                <div className="flex w-full space-x-2 justify-center">
                  <img src="/soil.png" width={25} height={25} />
                  <input
                    className="border-1 rounded-md w-2/3"
                    placeholder="Soil Type"
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
                    placeholder="Add Image"
                  />
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

export default FarmAnalytics;
