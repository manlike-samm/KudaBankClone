import React from "react";

import { Campaign, HourglassFull } from "@mui/icons-material";
import { IoIosClose } from "react-icons/io";
import TransactionHistory from "./TransactionHistory";

const HomeSpend = () => {
  return (
    <>
      <div className="Overdraft mb-3 m-auto rounded-lg shadow-lg">
        <div className="mx-4 py-4 flex space-x-2">
          <div className="self-center text-sky-400 bg-sky-100 rounded-full">
            <div className="p-1.5 -rotate-45">
              <HourglassFull />
            </div>
          </div>
          <div className="flex flex-col w-full space-y-1">
            <p className="text-left text-xs">Overdraft Available</p>
            <p className="font-bold text-lg">₦30,000</p>
            <div className="border-2 rounded-full border-sky-400"></div>
          </div>
        </div>
      </div>
      <div className="InviteFriends mb-8 m-auto rounded-lg shadow-lg">
        <div className="mx-3 py-4 flex space-x-2">
          <div className="self-center text-sky-400">
            <div className="p-1.5">
              <Campaign fontSize="large" />
            </div>
          </div>
          <div className="flex flex-col w-full space-y-1">
            <p className="font-bold text-lg text-indigo-900">Invite Friends</p>
            <p className="text-left text-xs">
              Invite your friends to kuda and enjoy the bank of the free.
            </p>
          </div>
          <div className="self-center text-neutral-600">
            <IoIosClose className="text-xl bg-neutral-300 rounded-full" />
          </div>
        </div>
      </div>
      <TransactionHistory />
    </>
  );
};

export default HomeSpend;
