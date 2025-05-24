"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const FarmAnalytics = () => {
  const [addCrop, setAddCrop] = useState(false);
  const [newFarm, setNewFarm] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (path) =>
    `block py-2 transition text-center ${
      pathname === path
        ? "bg-white text-[#4A7A4C]"
        : "hover:bg-[#619a65] text-white"
    }`;

  const Modal = ({ title, onClose, children }) => (
    <div className="absolute top-5 left-10 p-5 w-4/5 h-4/5 bg-white shadow-xl">
      <button
        className="border-2 border-[#4A7A4C] text-[#4A7A4C] bg-white p-1 rounded-md font-bold mb-3"
        onClick={onClose}
      >
        Back
      </button>
      <h2 className="text-[#4A7A4C] text-[35px] font-bold text-center mb-5">
        {title}
      </h2>
      {children}
    </div>
  );

  const InputWithIcon = ({ icon, placeholder, type = "input" }) => (
    <div className="flex w-full space-x-2 justify-center">
      <img src={icon} width={25} height={25} />
      {type === "select" ? (
        <select className="border rounded-md w-2/3 p-1">
          <option>{placeholder}</option>
        </select>
      ) : (
        <input
          className="border rounded-md w-2/3 p-1"
          placeholder={placeholder}
        />
      )}
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row  min-h-screen w-full bg-[#4A7A4C]">
      {/* Sidebar */}
      <aside className="flex md:w-1/5  flex-col items-center space-y-10 py-10  text-white">
        <div className="flex flex-col items-center space-y-1">
          <img
            src="/avatar.jpg"
            alt="avatar"
            className="h-[123px] w-[123px] rounded-full border-4 border-white"
          />
          <h3 className="font-bold text-center">Namık Korona</h3>
          <p className="text-xs">farm owner</p>
        </div>

        <ul className="w-full space-y-3 text-center text-lg font-bold ">
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
          onClick={() => setNewFarm(true)}
          className="w-3/4 rounded-md bg-white p-3 font-bold text-[#4A7A4C]"
        >
          + Add Farm
        </button>
      </aside>

      {/* Main Content */}
      <div className="bg-white rounded-lg min-h-screen w-full md:m-2 ml-0 flex flex-col p-5 space-y-5 font-bold text-[#4A7A4C] relative ">
        <div className="flex justify-between items-center">
          <h2 className="text-[35px]">Farm 1</h2>
          <button
            className="px-3 py-1 bg-[#4A7A4C] text-white rounded-md"
            onClick={() => setAddCrop(true)}
          >
            + Add Crop
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:gap-5 justify-around">
          {[
            { label: "Nitrogen", value: "20%", status: "Good" },
            { label: "Phosphorus", value: "8%", status: "Good" },
            { label: "Potassium", value: "13%", status: "Good" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex justify-between w-full md:w-1/3 shadow-md p-2 rounded-md"
            >
              <div>
                <h3>{item.label}:</h3>
                <p className="border-2 rounded-md text-xs text-center text-[#00A707] w-[50px]">
                  {item.status}
                </p>
              </div>
              <div className="flex items-center text-black">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:gap-5">
          <div className="flex flex-col w-full md:w-1/2 md:gap-3">
            {[
              { label: "Humidity", value: "15%", status: "Good" },
              {
                label: "Soil Hydration",
                value: "40%",
                status: "High",
                color: "#A10000",
              },
              {
                label: "PH Value",
                value: "4",
                status: "Low",
                color: "#C5B100",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between shadow-md p-2 rounded-md"
              >
                <div>
                  <h3>{item.label}:</h3>
                  <p
                    className={`border-2 rounded-md text-xs text-center w-[50px]`}
                    style={{ color: item.color || "#00A707" }}
                  >
                    {item.status}
                  </p>
                </div>
                <div className="flex items-center text-black">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/2 flex flex-col max-h-80 overflow-hidden">
            <img src="/farm.jpg" className="rounded-md max-h-64 object-cover" />
            <div className="flex w-full items-center justify-between mt-2">
              <div className="flex items-center gap-2 border-2 rounded-full p-1 w-1/2 justify-center">
                <img src="/crop.png" className="w-6 h-6" />
                <span>Crop:</span>
                <span className="text-black">Wheat</span>
              </div>
              <div className="flex items-center gap-2 border-2 rounded-full p-1 w-1/2 justify-center">
                <img src="/hector.png" className="bg-[#4A7A4C] w-6 h-6" />
                <span>Area:</span>
                <span className="text-black">25 Acres</span>
              </div>
            </div>
          </div>
        </div>

        <button className="border-4 border-[#4A7A4C] text-[#4A7A4C] py-2 rounded-md">
          Efficacy Rating
        </button>

        {/* Add Crop Modal */}
        {addCrop && (
          <Modal title="CROP DETAILS" onClose={() => setAddCrop(false)}>
            <form className="flex flex-col gap-5 items-center">
              <InputWithIcon
                icon="/crop.png"
                placeholder="Crop Name"
                type="select"
              />
              <InputWithIcon icon="/soil.png" placeholder="Soil Type" />
              <InputWithIcon icon="/addimage.png" placeholder="Add Image" />
              <button
                className="bg-[#4A7A4C] text-white w-1/3 p-1 rounded-md font-bold"
                type="submit"
              >
                Submit
              </button>
            </form>
          </Modal>
        )}

        {/* Add Farm Modal */}
        {newFarm && (
          <Modal title="FARM DETAILS" onClose={() => setNewFarm(false)}>
            <form className="flex flex-col gap-5 items-center">
              <InputWithIcon icon="/farmn.png" placeholder="Farm Name" />
              <InputWithIcon
                icon="/size.png"
                placeholder="Farm Size (in acres)"
              />
              <InputWithIcon icon="/addimage.png" placeholder="Farm Image" />
              <InputWithIcon
                icon="/type.png"
                placeholder="Crop Type"
                type="select"
              />
              <button
                className="bg-[#4A7A4C] text-white w-1/3 p-1 rounded-md font-bold"
                type="submit"
              >
                Submit
              </button>
            </form>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default FarmAnalytics;
