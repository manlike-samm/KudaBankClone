import React from "react";
import { Link } from "react-router-dom";

import { BiBlock } from "react-icons/bi";
import { GiPieChart } from "react-icons/gi";
import { GrNext, GrSettingsOption } from "react-icons/gr";
import { HiPlus } from "react-icons/hi";
import { IoIosSend, IoIosHome, IoIosCard } from "react-icons/io";
import { IoApps } from "react-icons/io5";
import { RiMastercardFill, RiMenu5Fill } from "react-icons/ri";

const Cards = () => {
  return (
    <>
      <div className="m-3">
        <section className="tab mb-2 grid grid-cols-3 justify-center items-center">
          <RiMenu5Fill className=" ml-1 text-xl text-indigo-900" />
          <p className="-ml-2 justify-self-center font-bold text-lg">Cards</p>
          <div className=" justify-self-end flex items-center space-x-2">
            <p className="text-xs font-bold text-indigo-900">Get Card</p>
            <div className=" bg-white rounded-full border border-indigo-900 p-1 ">
              <HiPlus className="text-white bg-indigo-900 rounded-full p-0.5 text-xl" />
            </div>
          </div>
        </section>
        <div className="-mx-3 border "></div>
        <section className="cardDetails mt-12 space-y-3">
          <div className=" relative rounded-lg bg-indigo-50 h-60 w-40 flex flex-col m-auto">
            <div className="flex justify-between m-2">
              <p className="text-4xl text-indigo-800">K.</p>
              <p className="text-xs ">NAIRA VIRTUAL</p>
            </div>
            <div className=" self-end absolute bottom-1 right-2">
              <RiMastercardFill className="text-5xl" />
            </div>
          </div>
          <div className="rounded bg-indigo-900 w-40 m-auto">
            <p className="text-white py-1 underline text-center font-semibold">
              Show Details
            </p>
          </div>
        </section>
        <div className="bg-indigo-900 text-white p-3 pb-1 rounded-lg mt-14">
          <p className=" font-bold ">Get a Kuda Visa Card!</p>
          <p className=" break-words text-sm">
            Request a free visa card and we would deliver it to you free of
            charge.
          </p>
        </div>
        <div className="flex justify-between mt-7 mb-3 rounded shadow bg-neutral-50 ">
          <div className="flex mt-3 ml-4">
            <div className=" relative">
              <div className="border-indigo-900 rounded  bg-indigo-50 border w-fit text-indigo-900 absolute z-30">
                <BiBlock className="p-0.5 mx-0.5 my-1.5 text-2xl" />
              </div>
              <div className="border-indigo-200 rounded bg-white border w-fit text-indigo-900 absolute -top-1 left-1 z-20">
                <BiBlock className=" mx-0.5 my-1.5 text-2xl" />
              </div>
            </div>
            <div className=" left-20 -mt-1 absolute space-y-1">
              <p className="font-bold">Block Card</p>
              <p className="text-xs">Temporarily disable this card</p>
            </div>
          </div>
          <div>
            <GrNext className="my-5 mx-1 text-xl" />
          </div>
        </div>
        <div className="flex justify-between my-3 rounded shadow bg-neutral-50 ">
          <div className="flex mt-3 ml-4">
            <div className=" relative">
              <div className="border-indigo-900 rounded  bg-indigo-50 border w-fit text-indigo-900 absolute z-30">
                <GrSettingsOption className=" p-0.5 mx-0.5 my-1.5 text-2xl" />
              </div>
              <div className="border-indigo-200 rounded bg-white border w-fit text-indigo-900 absolute -top-1 left-1 z-20">
                <GrSettingsOption className=" mx-0.5 my-1.5 text-2xl" />
              </div>
            </div>
            <div className=" left-20 -mt-1 absolute space-y-1">
              <p className="font-bold">Manage Card</p>
              <p className="text-xs">Choose where your ard works</p>
            </div>
          </div>
          <div>
            <GrNext className="my-5 mx-1 text-xl" />
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
            <div className="flex flex-col items-center  pt-2 opacity-30 scale-90">
              <GiPieChart className="" />
              <p className="text-sm font-bold">Budget</p>
            </div>
          </Link>
          <Link to="/cards">
            <div className="flex flex-col items-center  pt-2 scale-90  bg-indigo-100">
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
      </div>{" "}
    </>
  );
};

export default Cards;
