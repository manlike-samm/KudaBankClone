import React from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { GrPrevious } from "react-icons/gr";

import warning from "../images/warning.png";

const BeCareful = () => {
  const accName = useSelector((state) => state.transact.accountName);
  const trnsAmnt = useSelector((state) => state.transact.transferAmount);
  const dNtt = useSelector((state) => state.transact.accountNumber);

  const navigate = useNavigate();

  const prevClick = () => {
    navigate("/sendmoney");
  };

  console.log(accName);
  return (
    <>
      <div className="flex m-3 flex-col h-screen">
        <section className=" my-5 grid grid-cols-3 justify-center items-center">
          <GrPrevious
            onClick={prevClick}
            className=" ml-1 text-xl text-indigo-900"
          />
          {/* <div className=" place-self-end "></div> */}
        </section>
        <div className="border -mx-3"></div>
        <img
          src={warning}
          alt="warning"
          className=" h-20 mt-4 aspect-square mx-auto"
        />
        <div className="mx-4">
          <h3 className="text-xl font-bold text-center leading-tight my-3">
            Be careful, you're about to send money to an unsaved account.
          </h3>
          <br />
          <p className="">
            <span className=" font-semibold">{accName}</span> isn't a saved
            beneficiary on your account and you're about to send{" "}
            <span className=" font-semibold">
              ₦{new Intl.NumberFormat().format(trnsAmnt)}
            </span>{" "}
            to their account.
          </p>
          <br />
          <p>
            If you change your mind after making this transfer or discovered you
            have been scammed, we might not be able to reverse it.
          </p>
          <br />
          <p>
            If you know <span className=" font-semibold">{accName}</span>, we
            recommend you save the account after completing this transaction.
          </p>
          <br />
          <br />
          <form>
            <div className=" bg-neutral-300 mb-1 px-2 py-1.5 rounded">
              <input
                type="checkbox"
                value="couldBeScam"
                className=" w-4 h-4 align-middle "
                required
              />
              <label> I understand this could be a scam.</label>
            </div>
            <div className=" bg-neutral-300 mb-1 px-2 py-1.5 rounded">
              <input
                type="checkbox"
                value="cantBeReversed"
                className=" w-4 h-4 align-middle "
                required
              />
              <label className="ml-1">
                I understand this can't be reversed.
              </label>
            </div>
            <button className="bg-indigo-800 text-white underline w-full rounded py-2 mt-4 ">
              Continue
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BeCareful;
