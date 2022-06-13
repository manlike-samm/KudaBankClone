import React from "react";
import { Link } from "react-router-dom";

import { GiPieChart } from "react-icons/gi";
import { GrNext } from "react-icons/gr";
import { HiLink } from "react-icons/hi";
import {
  IoIosSend,
  IoIosPhonePortrait,
  IoIosStar,
  IoIosHome,
  IoIosCard,
} from "react-icons/io";
import { IoApps } from "react-icons/io5";
import { RiBillFill } from "react-icons/ri";
import { SiWebmoney } from "react-icons/si";

import FriendsOnKuda from "./FriendsOnKuda";

const Payments = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <p className="text-center text-lg font-bold my-2 ">Payments</p>
          <div className="border"></div>
          <FriendsOnKuda />
          <div className="OPTIONS m-3">
            <Link to="/sendmoney">
              <div className="flex justify-between mb-3 rounded shadow bg-neutral-50 ">
                <div className="flex mt-3 ml-4">
                  <div className=" relative">
                    <div className="border-indigo-900 rounded  bg-indigo-50 border w-fit text-indigo-900 absolute z-30">
                      <IoIosSend className=" mx-0.5 my-1.5 text-2xl" />
                    </div>
                    <div className="border-indigo-200 rounded bg-white border w-fit text-indigo-900 absolute -top-1 left-1 z-20">
                      <IoIosSend className=" mx-0.5 my-1.5 text-2xl" />
                    </div>
                  </div>
                  <div className=" left-20 -mt-1 absolute">
                    <p className="font-bold">Send Money</p>
                    <p className="text-xs">Free transfers to all banks</p>
                  </div>
                </div>
                <div>
                  <GrNext className="my-5 mx-1 text-xl" />
                </div>
              </div>
            </Link>
            <div className="flex justify-between mb-3 rounded shadow bg-neutral-50 ">
              <div className="flex mt-3 ml-4">
                <div className=" relative">
                  <div className="border-indigo-900 rounded  bg-indigo-50 border w-fit text-indigo-900 absolute z-30">
                    <IoIosPhonePortrait className=" mx-0.5 my-1.5 text-2xl" />
                  </div>
                  <div className="border-indigo-200 rounded bg-white border w-fit text-indigo-900 absolute -top-1 left-1 z-20">
                    <IoIosPhonePortrait className=" mx-0.5 my-1.5 text-2xl" />
                  </div>
                </div>
                <div className=" left-20 -mt-1 absolute">
                  <p className="font-bold">Buy Airtime</p>
                  <p className="text-xs">Recharge any phone easily</p>
                </div>
              </div>
              <div>
                <GrNext className="my-5 mx-1 text-xl" />
              </div>
            </div>
            <div className="flex justify-between mb-3 rounded shadow bg-neutral-50 ">
              <div className="flex mt-3 ml-4">
                <div className=" relative">
                  <div className="border-indigo-900 rounded  bg-indigo-50 border w-fit text-indigo-900 absolute z-30">
                    <RiBillFill className=" mx-0.5 my-1.5 text-2xl" />
                  </div>
                  <div className="border-indigo-200 rounded bg-white border w-fit text-indigo-900 absolute -top-1 left-1 z-20">
                    <RiBillFill className=" mx-0.5 my-1.5 text-2xl" />
                  </div>
                </div>
                <div className=" left-20 -mt-1 absolute">
                  <p className="font-bold">Pay A Bill</p>
                  <p className="text-xs">Take care of your essentials</p>
                </div>
              </div>
              <div>
                <GrNext className="my-5 mx-1 text-xl" />
              </div>
            </div>
            <div className="flex justify-between mb-3 rounded shadow bg-neutral-50 ">
              <div className="flex mt-3 ml-4">
                <div className=" relative">
                  <div className="border-indigo-900 rounded w-8 h-9  bg-indigo-50 border text-indigo-900 absolute z-30">
                    <HiLink className="mx-1.5 my-1.5 text-xl" />
                  </div>
                  <div className="border-indigo-200 rounded w-8 h-9 bg-white border text-indigo-900 absolute -top-1 left-1 z-20">
                    <HiLink className=" font-bold mx-1 my-1.5 text-xl" />
                  </div>
                </div>
                <div className=" left-20 -mt-1 absolute">
                  <p className="font-bold">Payment Link</p>
                  <p className="text-xs">
                    Send money without an account number
                  </p>
                </div>
              </div>
              <div>
                <GrNext className="my-5 mx-1 text-xl" />
              </div>
            </div>
            <div className="flex justify-between mb-3 rounded shadow bg-neutral-50 ">
              <div className="flex mt-3 ml-4">
                <div className=" relative">
                  <div className="border-indigo-900 rounded w-8 h-9  bg-indigo-50 border text-indigo-900 absolute z-30">
                    <SiWebmoney className="mx-1 my-1.5 text-xl" />
                  </div>
                  <div className="border-indigo-200 rounded w-8 h-9 bg-white border text-indigo-900 absolute -top-1 left-1 z-20">
                    <SiWebmoney className=" mx-1 my-1.5 text-xl" />
                  </div>
                </div>
                <div className=" left-20 -mt-1 absolute">
                  <p className="font-bold">Web Payments</p>
                  <p className="text-xs">Pay online without your card</p>
                </div>
              </div>
              <div>
                <GrNext className="my-5 mx-1 text-xl" />
              </div>
            </div>
          </div>
          <div className="m-3">
            <div className="flex justify-between items-center pt-2">
              <p className=" font-bold ">Send to Beneficiary </p>
              <p className="underline rounded text-sm bg-indigo-900 text-white font-bold px-2 py-1">
                View All
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex">
                <div className="border-2 rounded-full border-indigo-900">
                  <p className="bg-sky-400 text-white text-2xl rounded-full text-center w-10 h-10 pt-0.5 border border-white">
                    OA
                  </p>
                </div>
                <div className="ml-4">
                  <p className="font-bold">Omo Amu</p>
                  <p className="text-xs">Wema Bank: 3312232122</p>
                </div>
              </div>
              <IoIosStar className="text-neutral-400 text-xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-0 right-0 left-0 fixed z-50 bg-white  border-t-2">
        <div className="grid grid-cols-5 items-center text-indigo-900 text-2xl justify-around ">
          <Link to="/">
            <div className="flex flex-col items-center pt-2 scale-90 opacity-30   ">
              <IoIosHome className=" " />
              <p className="text-sm font-bold">Home</p>
            </div>
          </Link>
          <Link to="/payments">
            <div className="flex flex-col items-center pt-2 scale-90 bg-indigo-100">
              <IoIosSend className=" " />
              <p className="text-sm font-bold">Payments</p>
            </div>
          </Link>
          <Link to="/budget">
            <div className="flex flex-col items-center  pt-2 opacity-30 scale-90">
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

export default Payments;
