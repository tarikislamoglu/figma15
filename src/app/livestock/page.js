"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Livestock = () => {
  const [addCattle, setAddCattle] = useState(false);
  const [newFarm, setNewFarm] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (path) =>
    `block py-2 transition text-center ${
      pathname === path
        ? "bg-white text-[#4A7A4C]"
        : "hover:bg-[#619a65] text-white"
    }`;

  const FormInput = ({ icon, placeholder }) => (
    <div className="flex w-full space-x-2 justify-center items-center">
      {icon && <img src={icon} className="w-6 h-6" alt="" />}
      <input
        className="border rounded-md w-2/3 p-1"
        placeholder={placeholder}
      />
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

  const Modal = ({ title, onClose, children }) => (
    <div className="absolute top-5 left-10 p-5 w-4/5 h-4/5 bg-white shadow-xl rounded-md overflow-y-auto">
      <button
        className="border-2 border-[#4A7A4C] text-[#4A7A4C] bg-white p-1 rounded-md font-bold mb-4"
        onClick={onClose}
      >
        Back
      </button>
      <h2 className="text-[#4A7A4C] text-3xl font-bold text-center mb-6">
        {title}
      </h2>
      {children}
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row  min-h-screen w-full bg-[#4A7A4C]">
      {/* Sidebar */}
      <aside className="flex md:w-1/5 flex-col items-center space-y-10 py-10  text-white">
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
      <div className="bg-white rounded-lg w-full md:m-2 text-[#4A7A4C] p-5 space-y-5 relative">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center items-center">
          <h2 className="text-3xl font-bold">Manage Livestock</h2>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <button className="bg-[#4A7A4C] text-white rounded-md p-2 flex items-center space-x-1">
              <img src="/view.png" className="w-5 h-5" alt="" />
              <span>View Live</span>
            </button>
            <button
              className="bg-[#4A7A4C] text-white rounded-md p-2"
              onClick={() => setAddCattle(true)}
            >
              + Add Cattle
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-end space-y-3 md:space-y-0 md:space-x-3">
          <div className="bg-[#4A7A4C] p-2 rounded-md text-white text-center w-full md:w-auto">
            Total: <span className="font-bold">63</span>
          </div>
          <div className="bg-[#4A7A4C] p-2 rounded-md text-white text-center w-full md:w-auto">
            Area: <span className="font-bold">25 Acres</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4">
          {[
            { animal: "Goat", image: "/goat.png", count: "+5" },
            { animal: "Cow", image: "/cow.png", count: "+2" },
          ].map((item) => (
            <div
              key={item.animal}
              className="w-full md:w-1/2 lg:w-1/3 p-2 rounded-md shadow-md space-y-3"
            >
              <h3 className="text-xl font-bold">{item.animal}:</h3>
              <ul className="pl-2 space-y-1">
                <li>Count:</li>
                <li>Breed:</li>
                <li>Males:</li>
                <li>Females:</li>
              </ul>
              <div className="relative">
                <img
                  src={item.image}
                  className="w-full h-40 object-cover rounded-md"
                  alt={item.animal}
                />
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white font-bold">
                  {item.count}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Add Cattle Modal */}
        {addCattle && (
          <Modal title="CATTLE DETAILS" onClose={() => setAddCattle(false)}>
            <form className="flex flex-col space-y-5 w-full items-center">
              <FormInput
                icon="/cattle.png"
                placeholder="Enter the Cattle Type"
              />
              <FormInput placeholder="Enter the Breed" />
              <FormInput icon="/count.png" placeholder="Count" />
              <FormInput icon="/addimage.png" placeholder="Images" />
              <div className="flex w-full justify-center">
                <select className="border rounded-md w-2/3 p-1">
                  <option>Male/Female</option>
                </select>
              </div>
              <button
                className="bg-[#4A7A4C] text-white w-1/3 p-2 rounded-md font-bold"
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

export default Livestock;
