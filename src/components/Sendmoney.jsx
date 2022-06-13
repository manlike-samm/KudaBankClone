import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { GrPrevious } from "react-icons/gr";
import FriendsOnKuda from "./FriendsOnKuda";
import { client } from "../client";

import {
  transferAmount,
  accountNumber,
  accountName,
} from "../features/accountName/transactDetailsSlice";
import { useNavigate } from "react-router-dom";

const Sendmoney = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState([]);
  const [users, setUsers] = useState([]);
  const [inVal, setInVal] = useState("");
  const [trandsferAmt, settrandsferAmt] = useState("");
  const [receiver, setReceiver] = useState("");
  const [realUser, setRealUser] = useState(false);
  const [validAmount, setValidAmount] = useState(false);
  const [note, setNote] = useState("");
  const [validNote, setValidNote] = useState(false);

  const [accountNme, setAccountNme] = useState("");

  useEffect(() => {
    const query = '*[_type == "userInfo"]';

    client.fetch(query).then((data) => {
      setUserInfo(data[1]);
      setUsers(data);
      console.log(users);
    });
  }, []);

  useEffect(() => {
    if (note.length <= 0) {
      setValidNote(false);
    } else {
      setValidNote(true);
    }
  }, [note]);

  useEffect(() => {
    if (parseInt(trandsferAmt) > userInfo.accountBalance) {
      setValidAmount(false);
    } else {
      setValidAmount(true);
    }
  }, [trandsferAmt]);

  let navigate = useNavigate();

  const handleclick1 = () => {
    dispatch(transferAmount(trandsferAmt));
    dispatch(accountName(accountNme));
    dispatch(accountNumber(inVal));

    if (realUser && validAmount && validNote) {
      navigate("/becareful");
    }
  };

  const handleChange = (e) => {
    setInVal(e.target.value);
  };
  const handleChange1 = (e) => {
    settrandsferAmt(e.target.value);
  };

  const handleChange3 = (e) => {
    setNote(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Form submitted,`);
  };

  let num = parseInt(inVal);
  const handler = (e) => {
    if (e.key === "Enter") {
      users.forEach((usr) => {
        if (inVal.length === 10 && usr.accountNumber === num) {
          setReceiver(usr.firstName + " " + usr.lastName);
          setAccountNme(usr.firstName + " " + usr.lastName);
          setRealUser(true);
        }
        // if (inVal.length === 10 && usr.accountNumber !== num) {
        //   setReceiver("account not found");
        // }
        if (inVal.length < 10 || inVal.length > 10) {
          setReceiver("Account number must be 10 digits ");
        }
        if (inVal.length === 0) {
          setReceiver(" ");
        }
      });
    }
  };

  return (
    <>
      {/* {!realUser ? ( */}
      <div className="flex flex-col h-screen">
        <section className="m-3 my-5 grid grid-cols-3 justify-center items-center">
          <GrPrevious className=" ml-1 text-xl text-indigo-900" />
          <p className="-ml-2 justify-self-center font-bold text-lg">
            Send Money
          </p>
          <div className=" place-self-end ">
            <button
              type="submit"
              on
              onClick={handleclick1}
              className="underline bg-indigo-800 opacity-50 hover:opacity-100 rounded text-white px-5 py-0.5 "
            >
              next
            </button>
          </div>
        </section>
        <div className="border"></div>
        <div className=" hover:cursor-default rounded shadow-[0px_0px_20px_rgba(0,0,0,0.1)] mt-6 mx-auto flex justify-center items-center text-indigo-900 px-5 text-[11px] border border-indigo-900">
          <p>Free transfers to other banks </p>
          <p className="text-base font-bold ml-2"> 24</p>
        </div>
        <FriendsOnKuda />
        <div className="m-3 ">
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col mt-4 space-y-6"
          >
            <div className="flex flex-col space-y-1 ">
              <div className="flex justify-between text-sm">
                <p>Amount </p>
                <p>
                  Balance: ₦
                  {userInfo.accountBalance &&
                    new Intl.NumberFormat().format(userInfo.accountBalance)}
                </p>
              </div>
              <input
                type="number"
                name="amount"
                maxLength={15}
                onChange={handleChange1}
                value={trandsferAmt}
                className=" w-full px-3 py-2 bg-neutral-200 rounded-md"
                placeholder="Amount"
                required
              />
              {parseInt(trandsferAmt) > userInfo.accountBalance ? (
                <p className="text-xs text-red-700">
                  Amount shouldn't exceed{" "}
                  {new Intl.NumberFormat().format(userInfo.accountBalance)}
                </p>
              ) : (
                <p></p>
              )}
            </div>
            <div className="flex flex-col space-y-1 ">
              <p className="text-sm">Bank </p>
              <select
                name="Select"
                // value={amount}
                className="px-3 py-2 bg-neutral-200 rounded-md focus:outline-none"
                required
              >
                <option className="w-fit mr-10">Select Bank</option>
                <option className="w-fit mr-10" value="access">
                  access bank
                </option>
                <option className="w-fit mr-10" value="wema">
                  wema bank
                </option>
              </select>
            </div>
            <div className="flex flex-col space-y-1 ">
              <p className=" text-sm ">Account Number </p>

              <input
                type="number"
                name="accountNumber"
                maxLength="1"
                onKeyPress={(e) => handler(e)}
                onChange={handleChange}
                value={inVal}
                className="w-full px-3 py-2 bg-neutral-200 rounded-md"
                placeholder="0123456789"
                required
              />
              <p className="text-xs text-neutral-700 pl-1">{receiver}</p>
            </div>
            <div className="flex flex-col space-y-1 ">
              <p className=" text-sm ">Add A Note </p>

              <input
                onChange={handleChange3}
                type="text"
                name="addNote"
                // value={amount}
                className="w-full px-3 py-2 bg-neutral-200 rounded-md"
                placeholder="what's this for"
                required
              />
              {note.length <= 0 ? (
                <p className="text-xs text-red-700">note cannot be empty</p>
              ) : (
                <p></p>
              )}
            </div>
          </form>
        </div>
      </div>
      {/* ) : ( setTimeout(

        <div>
          <BeCareful />
        </div>
      ), 6000
      )} */}
    </>
  );
};

export default Sendmoney;
