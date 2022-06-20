import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { client } from "../client";

import { GrPrevious } from "react-icons/gr";
import { FiLock } from "react-icons/fi";
import {
  creditReceiver,
  debitSender,
  sendersAcntBal,
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
    idSender
  );
  console.log(typeof trnsAmnt);

  const handleClick = () => {
    dispatch(creditReceiver(trnsAmnt));
    dispatch(debitSender(trnsAmnt));
    dispatch(sendersAcntBal(senderAcntBal));

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
      .commit() && navigate("/");
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
          onClick={handleClick}
          type="submit"
          className="bg-indigo-800 text-white underline w-4/6 mx-auto rounded py-2 mt-6 "
        >
          Send
        </button>
      </div>
    </>
  );
};

export default Confirm;
