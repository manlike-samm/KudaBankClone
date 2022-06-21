import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  AccountBalanceRounded,
  AddCircle,
  Apps,
  SavingsRounded,
} from "@mui/icons-material";

import { GiPieChart } from "react-icons/gi";
import { IoIosSend, IoIosHome, IoIosCard } from "react-icons/io";
import { IoApps } from "react-icons/io5";

import HomeSpend from "./HomeSpend";
import userAva from "../images/user1.jpg";
import { client } from "../client";

import {
  creditReceiver,
  debitSender,
  idSender,
  sendersAcntBal,
  sendersAcntNumber,
  users,
} from "../features/accountName/transactDetailsSlice";

const Home = () => {
  const transactions = useSelector((state) => state.transact.transactHistory);

  const [userInfo, setUserInfo] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const query = '*[_type == "userInfo"]';

    client.fetch(query).then((data) => {
      setUserInfo(data[2]);
      dispatch(users(data));
      localStorage.setItem("user", JSON.stringify(data[2]));
    });
  }, [transactions]);
  console.log(userInfo);
  const user =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  useEffect(() => {
    if (user) {
      dispatch(sendersAcntBal(userInfo.accountBalance));
      dispatch(sendersAcntNumber(userInfo.accountNumber));
      dispatch(idSender(userInfo._id));
    }
  }, [sendersAcntBal, userInfo]);

  const accB = useSelector((state) => state.transact.sendersAcntBal);
  const accountBalance = parseInt(accB);
  return (
    <>
      <div className="m-4">
        <div className="Navbar flex justify-between">
          <div className="Avatar/Name flex items-center space-x-2">
            <img
              src={userAva}
              alt="userAvatar"
              className="w-12 rounded-full aspect-square"
            />
            <p className="font-bold">Hi {userInfo.lastName}</p>
          </div>
          <div className="AddMoney flex items-center space-x-1">
            <p className="text-xs font-semibold">Add Money</p>
            <div className=" rounded-full border-2 border-slate-900 flex items-center">
              <AddCircle />
            </div>
          </div>
        </div>
        <div className="Balance shadow-lg my-4 m-auto flex flex-col items-center rounded-lg bg-indigo-900 text-white">
          <p className="text-xs mt-2">Account Balance</p>

          {accountBalance ? (
            <p className="text-2xl font-bold text-sky-400">
              {" "}
              ₦{new Intl.NumberFormat().format(accountBalance)}{" "}
            </p>
          ) : (
            <p className=" text-xs italic text-sky-400"> fetching details...</p>
          )}

          <div className="flex justify-around space-x-12 my-2">
            <div className=" flex flex-col items-center">
              <div className=" opacity-100">
                <Apps fontSize="large" />
              </div>
              <p className="text-xs  opacity-100">Spend</p>
            </div>
            <div className=" flex flex-col items-center">
              <div className=" opacity-30">
                <SavingsRounded fontSize="large" />
              </div>
              <p className="text-xs  opacity-30">Save</p>
            </div>
            <div className=" flex flex-col items-center">
              <div className=" opacity-30">
                <AccountBalanceRounded fontSize="large" />
              </div>
              <p className="text-xs opacity-30">Borrow</p>
            </div>
          </div>
        </div>
        <HomeSpend />
      </div>
      <div className="bottom-0 right-0 left-0 fixed z-50 bg-white  border-t-2">
        <div className="grid grid-cols-5 items-center text-indigo-900 text-2xl justify-around ">
          <Link to="/">
            <div className="flex flex-col items-center pt-2 scale-90 bg-indigo-100 ">
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

export default Home;
