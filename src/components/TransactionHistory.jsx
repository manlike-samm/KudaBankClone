import React from "react";
import { RiUserReceivedFill } from "react-icons/ri";
import { IoIosPhonePortrait } from "react-icons/io";
import { useSelector } from "react-redux";

const TransactionHistory = () => {
  const transact = useSelector((state) => state.transact.transactHistory);
  const transactns = [...transact].reverse();
  //   const transactions = [transactns.reverse()];
  //   console.log(transactions);
  //   console.log(transactns);

  return (
    <>
      {transactns.map((transaction) => (
        <div>
          <p className="mb-3 bg-indigo-50 -mx-4 px-4">{transaction.date}</p>
          <div className="-m)x-4 px-2 border-b m-auto ">
            <div className="mx-3 py-4 flex justify-between">
              <div className=" text-left flex space-x-4">
                <RiUserReceivedFill className="text-4xl self-center bg-indigo-200 p-1 rounded-full" />
                <div className=" space-y-1">
                  <p className="font-bold ">{transaction.name}</p>
                  <p className="text-sm">{transaction.time}</p>
                </div>
              </div>
              <p className="text-sm text-red-400">
                -₦{new Intl.NumberFormat().format(transaction.amount)}
              </p>
            </div>
          </div>
        </div>
      ))}
      ;
    </>
  );
};

export default TransactionHistory;
