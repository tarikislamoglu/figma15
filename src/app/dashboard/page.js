"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const DashBoard = () => {
  const [newFarm, setNewFarm] = useState(false);
  const pathname = usePathname();
  const products = [
    {
      color: "#FF9494",
      label: "Wheat",
      percent: "40%",
      status: "Ready",
    },
    {
      color: "#0066C5",
      label: "Corn",
      percent: "10%",
      status: "Not Ready",
    },
    {
      color: "#FF0000",
      label: "Barley",
      percent: "30%",
      status: "Ready",
    },
    {
      color: "#60A662",
      label: "Paddy",
      percent: "20%",
      status: "Ready",
    },
  ];
  const data = products.map((item) => ({
    name: item.label,
    value: parseFloat(item.percent.replace("%", "")),
    color: item.color,
  }));

  const getLinkClass = (path) =>
    `block py-2 text-center transition ${
      pathname === path
        ? "bg-white text-[#4A7A4C]"
        : "text-white hover:bg-[#619a65]"
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
      <main className="relative md:m-2 ml-0 rounded-lg bg-white p-5 font-bold text-[#4A7A4C] space-y-5 md:w-4/5">
        <div className="flex flex-col items-center justify-between md:flex-row space-y-5">
          <h2 className="text-3xl">Manage Livestock</h2>
          <div className="flex items-center space-x-2 rounded-md bg-[#4A7A4C] p-3 text-white">
            <img src="/view.png" alt="view" />
            <button>View Live</button>
          </div>
        </div>

        <div>
          <p>Farms:</p>
          <p>Area:</p>
          <p>Expected date of Harvest:</p>
        </div>

        <h3 className="w-full text-center text-lg">Crops Distribution</h3>

        <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-2">
          <div className="w-full md:w-1/2 relative">
            <img src="/location.jpg" alt="location" className="w-full h-full" />
            <div className="absolute bottom-2 right-2 flex items-center rounded-md bg-white p-1 text-sm">
              <IoLocationSharp className="mr-1" />
              Location
            </div>
          </div>

          <div className="w-full md:w-1/2 rounded-md border text-black shadow-xl">
            <div>
              <div className="flex space-x-5">
                <div className="w-1/2 relative flex justify-center items-center">
                  <PieChart width={250} height={250}>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                  <div className="absolute top-1/2 left-1/2 font-bold -translate-x-1/2 -translate-y-1/2 text-center ">
                    23acres
                  </div>
                </div>

                <div className="flex items-center justify-center ">
                  <ul className="flex flex-col justify-center space-y-2">
                    {products.map(({ color, label }) => (
                      <li key={label} className="flex items-center space-x-3">
                        <div
                          className="h-5 w-5 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                        <span>{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <hr />
              <div className="p-5">
                <ul className="space-y-5 flex flex-col items-center md:items-start md-w-full">
                  {products.map(({ color, label, percent, status }) => (
                    <li key={label} className="flex items-center space-x-3">
                      <div
                        className="h-5 w-5 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      <p>{label}</p>
                      <p className="text-sm" style={{ color }}>
                        {percent}
                      </p>
                      <p
                        className={`rounded-md border-2 p-1 text-sm ${
                          status === "Ready"
                            ? "border-[#60A662] text-[#60A662]"
                            : "border-[#FF0000] text-[#FF0000]"
                        }`}
                      >
                        {status}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

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
      </main>
    </div>
  );
};

export default DashBoard;
