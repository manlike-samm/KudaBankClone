import React from "react";
import { Link } from "react-router-dom";

import { GiMoneyStack, GiPieChart } from "react-icons/gi";
import { GrNext } from "react-icons/gr";
import { IoIosSend, IoIosHome, IoIosCard } from "react-icons/io";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import { IoApps } from "react-icons/io5";
import { RiUserReceivedFill } from "react-icons/ri";

const Budget = () => {
  return (
    <>
      <div>
        <div className="m-3 grid grid-cols-2 ">
          <GiPieChart className="text-2xl text-indigo-900" />
          <p className=" -ml-8 text-lg font-bold">Budget</p>
        </div>
        <div className="border "></div>
        <div>
          <p className="text-center p-3 text-sm">MAY 2022</p>
          <div className="overview grid grid-cols-2 mt-2 m-4 gap-3">
            <div className="bg-white shadow-md">
              <div className=" m-3 w-fit flex items-center">
                <HiOutlinePlus className="text-green-400 text-lg bg-green-100 rounded-full p-0.5" />
                <div className=" ml-3">
                  <p className="font-bold text-green-400">₦10,124.89</p>
                  <p className=" text-xs text-neutral-400">Money In</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md">
              <div className=" m-3 w-fit flex items-center">
                <HiOutlineMinus className="text-red-400 text-lg bg-red-100 rounded-full p-0.5" />
                <div className=" ml-3">
                  <p className="font-bold text-red-400">₦1,124.89</p>
                  <p className=" text-xs text-neutral-400">Money Out</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md">
              <div className=" m-3 w-fit flex items-center">
                <GiMoneyStack className="text-indigo-900 text-lg bg-indigo-100 rounded-full p-0.5" />
                <div className=" ml-3">
                  <p className="font-bold">₦9,000.00</p>
                  <p className=" text-xs text-neutral-400">Balance</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md">
              <div className=" m-3 w-fit flex items-center">
                <GiPieChart className="text-neutral-400 text-lg bg-neutral-100 rounded-full p-0.5" />
                <div className=" ml-3">
                  <p className="font-bold">No Budget</p>
                  <p className=" text-xs text-neutral-400">Create a Budget</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mb-3">
            <div className="flex my-3 ml-4 space-x-3">
              <div className="">
                <div className=" rounded-full bg-neutral-200 border w-fit text-neutral-500">
                  <GiPieChart className=" p-3 text-6xl" />
                </div>
              </div>
              <div className=" space-y-2 ">
                <p className="font-bold text-lg">Create a Budget</p>
                <p className="text-sm leading-tight break-words text-neutral-400">
                  Create a smart budget now to manage your finances better.
                </p>
              </div>
            </div>
            <div className="text-green-400">
              <GrNext className="my-5 mx-1 text-xl " />
            </div>
          </div>
          <div>
            <p className="m-3 font-bold text-lg">All Categories</p>
            <div className="px-2 border-b m-auto bg-indigo-50">
              <div className="mx-3 py-4 flex justify-between items-center">
                <div className=" text-left flex space-x-4">
                  <RiUserReceivedFill className="text-4xl self-center bg-indigo-200 p-1 rounded-full" />
                  <div className=" space-y-1">
                    <p className="font-bold text-sm ">Transfers</p>
                    <p className="text-xs">4 Transactions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 -mr-4">
                  <div className="text-right space-y-1">
                    <p className="text-sm font-bold">3,500.00</p>
                    <p className="text-xs">100.00%</p>
                  </div>
                  <GrNext className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-0 right-0 left-0 fixed z-50 bg-white  border-t-2">
        <div className="grid grid-cols-5 items-center text-indigo-900 text-2xl justify-around ">
          <Link to="/">
            <div className="flex flex-col items-center pt-2 scale-90 opacity-30 ">
              <IoIosHome className=" " />
              <p className="text-sm font-bold">Home</p>
            </div>
          </Link>
          <Link to="/payments">
            <div className="flex flex-col items-center pt-2 opacity-30 scale-90">
              <IoIosSend className=" " />
              <p className="text-sm font-bold">Payments</p>
            </div>
          </Link>
          <Link to="/budget">
            <div className="flex flex-col items-center  pt-2 scale-90 bg-indigo-100">
              <GiPieChart className="" />
              <p className="text-sm font-bold">Budget</p>
            </div>
          </Link>
          <Link to="/cards">
            <div className="flex flex-col items-center  pt-2 opacity-30 scale-90">
              <IoIosCard className=" " />
              <p className="text-sm font-bold">Cards</p>
            </div>
          </Link>
          <Link to="/more">
            <div className="flex flex-col items-center pt-2 opacity-30 scale-90">
              <IoApps />
              <p className="text-sm font-bold">More</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Budget;
