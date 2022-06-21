import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { client } from "../client";

import { GrPrevious } from "react-icons/gr";
import { FiLock } from "react-icons/fi";
import {
  creditReceiver,
  debitSender,
  sendersAcntBal,
  transactHistory,
} from "../features/accountName/transactDetailsSlice";

const Confirm = () => {
  const accName = useSelector((state) => state.transact.accountName),
    trnsAmnt = parseInt(useSelector((state) => state.transact.transferAmount)),
    dNtt = useSelector((state) => state.transact.accountNumber),
    sendersAcnNum = useSelector((state) => state.transact.sendersAcntNumber),
    senderAcntBal = useSelector((state) => state.transact.sendersAcntBal),
    receiversAcntBal = useSelector((state) => state.transact.receiversAcntBal),
    note = useSelector((state) => state.transact.description),
    idReceiver = useSelector((state) => state.transact.idReceiver),
    idSender = useSelector((state) => state.transact.idSender),
    transHistory = useSelector((state) => state.transact.transactHistory),
    [isFormSubmitted, setIsFormSubmitted] = useState(false),
    [loading, setLoading] = useState(false),
    navigate = useNavigate(),
    dispatch = useDispatch();

  console.log(
    accName,
    trnsAmnt,
    dNtt,
    sendersAcnNum,
    senderAcntBal,
    receiversAcntBal,
    idReceiver,
    idSender,
    transHistory
  );
  console.log(typeof transHistory);

  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const d = new Date();
  const month = months[d.getMonth()];
  if (d.getMinutes() < 10) {
  }

  const date = d.getDate() + " " + month + " " + d.getFullYear();
  const time =
    d.getHours() +
    ":" +
    (d.getMinutes() < 10 ? `0${d.getMinutes()}` : ` ${d.getMinutes()}`);

  const handleSubmit = () => {
    setLoading(true);
    dispatch(creditReceiver(trnsAmnt));
    dispatch(debitSender(trnsAmnt));
    dispatch(
      transactHistory({
        name: accName,
        amount: trnsAmnt,
        date: date,
        time: time,
      })
    );
    client
      .patch(idReceiver)
      .set({
        accountBalance: receiversAcntBal + trnsAmnt,
      })
      .commit();

    client
      .patch(idSender)
      .set({
        accountBalance: senderAcntBal - trnsAmnt,
      })
      .commit()
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
    //    && navigate("/");
  };
  const handleSubmit1 = () => {
    dispatch(sendersAcntBal(senderAcntBal));

    navigate("/");
  };

  const prevClick = () => {
    navigate("/becareful");
  };
  return (
    <>
      <div className="flex m-3 flex-col h-screen">
        <section className=" my-3 grid grid-cols-3 justify-center items-center">
          <GrPrevious
            onClick={prevClick}
            className=" ml-1 text-xl text-indigo-900"
          />
          <p className="-ml-2 justify-self-center font-bold text-lg">Confirm</p>
          {/* <div className=" place-self-end "></div> */}
        </section>
        <div className="border -mx-3 "></div>
        {!isFormSubmitted ? (
          <>
            <div className="text-center my-4">
              <p>To:</p>
              <p className=" font-bold text-2xl">{accName}</p>
              <p>Amount:</p>
              <p className=" font-bold text-2xl">
                ₦{new Intl.NumberFormat().format(trnsAmnt)}
              </p>
            </div>
            <div className=" border p-4 rounded-lg">
              <div className="flex justify-between mb-2 ">
                <p>From:</p>
                <p className="font-bold">{sendersAcnNum}</p>
              </div>
              <div className="flex justify-between ">
                <p>Transaction Fee:</p>
                <p className="font-bold">₦10.21</p>
              </div>
            </div>
            <div className=" p-4 ">
              <div className="flex justify-between mb-2 ">
                <p>Description:</p>
                <p className="font-bold">{note}</p>
              </div>
              <div className="flex justify-between ">
                <p>Beneficiary Bank:</p>
                <p className="font-bold">Access Bank</p>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-indigo-800 text-white underline w-4/6 mx-auto rounded py-2 mt-6 "
            >
              Send
            </button>
          </>
        ) : (
          <>
            <p className="p-10 text-4xl font-semibold"> Funds sent 😊</p>
            <button
              onClick={handleSubmit1}
              type="submit"
              className="bg-indigo-800 text-white underline w-4/6 mx-auto rounded py-2 mt-6 "
            >
              Go home
            </button>
          </>
        )}
        ;
      </div>
    </>
  );
};

export default Confirm;
