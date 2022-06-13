import React from "react";

import { Campaign, HourglassFull } from "@mui/icons-material";
import { IoIosClose, IoIosPhonePortrait } from "react-icons/io";
import { RiUserReceivedFill } from "react-icons/ri";

// import { client } from "../client";

const HomeSpend = () => {
  //   const [userInfo, setUserInfo] = useState([]);

  //   useEffect(() => {
  //     const query = '*[_type == "userInfo"]';

  //     client.fetch(query).then((data) => {
  //       setUserInfo(data);
  //       console.log(userInfo[1]);
  //     });
  //   }, []);

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
      <p className="mb-3 bg-indigo-50 -mx-4 px-4"> 27 Apr 2022</p>
      <div className="-mx-4 px-2 border-b m-auto ">
        <div className="mx-3 py-4 flex justify-between">
          <div className=" text-left flex space-x-4">
            <IoIosPhonePortrait className="text-4xl self-center bg-indigo-200 p-1 rounded-full" />
            <div className=" space-y-1">
              <p className="font-bold ">ETISALAT 2348171595935</p>
              <p className="text-sm">2:08 pm</p>
            </div>
          </div>
          <p className="text-sm">500.00</p>
        </div>
      </div>
      <div className="-mx-4 px-2 border-b m-auto ">
        <div className="mx-3 py-4 flex justify-between">
          <div className=" text-left flex space-x-4">
            <RiUserReceivedFill className="text-4xl self-center bg-indigo-200 p-1 rounded-full" />
            <div className=" space-y-1">
              <p className="font-bold ">Torobong Ekanem</p>
              <p className="text-sm">7:18 pm</p>
            </div>
          </div>
          <p className="text-sm text-green-400">+3,500.00</p>
        </div>
      </div>
    </>
  );
};

export default HomeSpend;
