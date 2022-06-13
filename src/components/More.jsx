import React from "react";
import { GrNext } from "react-icons/gr";
import userAva from "../images/user1.jpg";
import { CgProfile } from "react-icons/cg";
import {
  IoIosLock,
  IoIosNotifications,
  IoIosSpeedometer,
  IoMdCard,
  IoMdChatbubbles,
} from "react-icons/io";
import { RiBillFill, RiBookmark3Fill } from "react-icons/ri";
import { GiPieChart } from "react-icons/gi";
import { IoIosSend, IoIosHome, IoIosCard } from "react-icons/io";
import { IoApps } from "react-icons/io5";
import { Link } from "react-router-dom";

const More = () => {
  return (
    <>
      <div className="m-3">
        <section className="Tab grid grid-cols-2 mb-2 items-center">
          <p className="text-right font-bold text-lg -mr-4">More</p>
          <div className=" justify-self-end relative">
            <div className="bg-red-600 aspect-square absolute left-1 top-1 h-2 rounded-full"></div>
            <IoIosNotifications className="text-3xl text-indigo-900" />
          </div>
        </section>
        <div className="-mx-3 border "></div>
        <div className="flex justify-between items-center mt-4 mb-6 rounded shadow bg-neutral-50">
          <div className="flex ml-4">
            <img
              src={userAva}
              alt="userAvatar"
              className="w-12 rounded-full aspect-square m-2"
            />
            <div className=" self-center space-y-1">
              <p className="font-bold">SAMUEL DONALD EKAMEM</p>
              <p className="text-xs">Account Details</p>
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
              <p className="font-bold">Statements & Reports</p>
              <p className="text-xs">Download monthly statements</p>
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
                <IoMdCard className=" mx-0.5 my-1.5 text-2xl" />
              </div>
              <div className="border-indigo-200 rounded bg-white border w-fit text-indigo-900 absolute -top-1 left-1 z-20">
                <IoMdCard className=" mx-0.5 my-1.5 text-2xl" />
              </div>
            </div>
            <div className=" left-20 -mt-1 absolute">
              <p className="font-bold">Saved Cards</p>
              <p className="text-xs">Manage connected cards</p>
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
                <CgProfile className=" mx-0.5 my-1.5 text-2xl" />
              </div>
              <div className="border-indigo-200 rounded bg-white border w-fit text-indigo-900 absolute -top-1 left-1 z-20">
                <CgProfile className=" mx-0.5 my-1.5 text-2xl" />
              </div>
            </div>
            <div className=" left-20 -mt-1 absolute">
              <p className="font-bold">Linked Accounts</p>
              <p className="text-xs">Manage external accounts</p>
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
                <IoMdChatbubbles className="mx-1.5 my-1.5 text-xl" />
              </div>
              <div className="border-indigo-200 rounded w-8 h-9 bg-white border text-indigo-900 absolute -top-1 left-1 z-20">
                <IoMdChatbubbles className=" font-bold mx-1 my-1.5 text-xl" />
              </div>
            </div>
            <div className=" left-20 -mt-1 absolute">
              <p className="font-bold">Get Help</p>
              <p className="text-xs">Get support or send feedback</p>
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
                <IoIosLock className="mx-1 my-1.5 text-xl" />
              </div>
              <div className="border-indigo-200 rounded w-8 h-9 bg-white border text-indigo-900 absolute -top-1 left-1 z-20">
                <IoIosLock className=" mx-1 my-1.5 text-xl" />
              </div>
            </div>
            <div className=" left-20 -mt-1 absolute">
              <p className="font-bold">Security</p>
              <p className="text-xs">Protect yourself from intruders</p>
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
                <RiBookmark3Fill className=" mx-0.5 my-1.5 text-2xl" />
              </div>
              <div className="border-indigo-200 rounded bg-white border w-fit text-indigo-900 absolute -top-1 left-1 z-20">
                <RiBookmark3Fill className=" mx-0.5 my-1.5 text-2xl" />
              </div>
            </div>
            <div className=" left-20 -mt-1 absolute">
              <p className="font-bold">Referrals</p>
              <p className="text-xs">Earn when your friends join kuda</p>
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
                <IoIosSpeedometer className="mx-1.5 my-1.5 text-xl" />
              </div>
              <div className="border-indigo-200 rounded w-8 h-9 bg-white border text-indigo-900 absolute -top-1 left-1 z-20">
                <IoIosSpeedometer className=" font-bold mx-1 my-1.5 text-xl" />
              </div>
            </div>
            <div className=" left-20 -mt-1 absolute">
              <p className="font-bold">Account Limits</p>
              <p className="text-xs">How much you can spend and receive</p>
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
                <RiBillFill className="mx-1 my-1.5 text-xl" />
              </div>
              <div className="border-indigo-200 rounded w-8 h-9 bg-white border text-indigo-900 absolute -top-1 left-1 z-20">
                <RiBillFill className=" mx-1 my-1.5 text-xl" />
              </div>
            </div>
            <div className=" left-20 -mt-1 absolute">
              <p className="font-bold">Legal</p>
              <p className="text-xs">About our contract with you</p>
            </div>
          </div>
          <div>
            <GrNext className="my-5 mx-1 text-xl" />
          </div>
        </div>
        <p className="m-4 text-red-500 underline font-bold text-center text-lg">
          Sign Out
        </p>
        <p className="py-1 text-center">Version 1.924</p>
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
            <div className="flex flex-col items-center pt-2  scale-90 bg-indigo-100">
              <IoApps />
              <p className="text-sm font-bold">More</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default More;
