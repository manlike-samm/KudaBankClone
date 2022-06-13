import React from "react";
import { GiPieChart } from "react-icons/gi";
import { IoIosSend, IoIosHome, IoIosCard } from "react-icons/io";
import { IoApps } from "react-icons/io5";
import { Link } from "react-router-dom";

const Base = () => {
  return (
    <>
      <div className="flex text-indigo-900 text-2xl justify-around ">
        <div className="flex flex-col items-center pt-2 px-6 scale-90 bg-indigo-100 ">
          <IoIosHome className=" " />
          <Link to="/">
            <p className="text-sm font-bold">Home</p>
          </Link>
        </div>
        <div className="flex flex-col items-center pr-6 pt-2 opacity-30 scale-90">
          <IoIosSend className=" " />
          <Link to="/payments">
            <p className="text-sm font-bold">Payments</p>
          </Link>
        </div>
        <div className="flex flex-col items-center pr-6 pt-2 opacity-30 scale-90">
          <GiPieChart className="" />
          <Link to="/budget">
            <p className="text-sm font-bold">Budget</p>
          </Link>
        </div>
        <div className="flex flex-col items-center pr-6 pt-2 opacity-30 scale-90">
          <IoIosCard className=" " />
          <Link to="/cards">
            <p className="text-sm font-bold">Cards</p>
          </Link>
        </div>
        <div className="flex flex-col items-center pr-6 pt-2 opacity-30 scale-90">
          <IoApps />
          <Link to="/more">
            <p className="text-sm font-bold">More</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Base;
