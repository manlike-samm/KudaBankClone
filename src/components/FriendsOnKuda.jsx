import React from "react";

const FriendsOnKuda = () => {
  return (
    <>
      <div className="m-4">
        <div className="flex space-x-2">
          <p className="h-5 w-5 bg-indigo-900 text-white text-center pb-3 rounded-full">
            k
          </p>
          <p className="mb-2 text-sm">Friends on Kuda</p>
        </div>
        <div className="flex justify-around text-center leading-4 text-sm">
          <div>
            <p className="bg-indigo-100 text-indigo-900 text-3xl rounded-full text-center w-14 h-14 pt-2 mb-2">
              K
            </p>
            <div className=" font-bold ">
              <p>All</p>
              <p>Contacts</p>
            </div>
          </div>
          <div>
            <p className="bg-sky-400 text-white text-2xl rounded-full text-center w-14 h-14 pt-3 mb-2">
              IA
            </p>
            <p>Idara</p>
            <p>Amu</p>
          </div>
          <div>
            <p className="bg-yellow-400 text-white text-2xl rounded-full text-center w-14 h-14 pt-3 mb-2">
              SE
            </p>
            <p>Samuel</p>
            <p>Ekanem</p>
          </div>
          <div>
            <p className="bg-indigo-900 text-white text-2xl rounded-full text-center w-14 h-14 pt-3 mb-2">
              TD
            </p>
            <p>Toro</p>
            <p>Donald</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendsOnKuda;
