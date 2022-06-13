import React from "react";
import userAva from "../images/user1.jpg";

const welcomeBack = () => {
  return (
    <>
      <div className="flex flex-col mx-5 justify-center h-screen scale-110">
        <img
          src={userAva}
          alt="profile-avatar"
          className="self-center w-32 rounded-full aspect-square mb-7"
        />
        <p className="text-center text-2xl">Welcome Back</p>
        <p className="text-center mt-3">Samuel Ekanem</p>

        <p className="text-center text-sm mt-10">Secret PIN</p>
        <div className="flex self-center space-x-2 mt-4">
          <div className=" bg-neutral-300 h-3 w-3 rounded-full"></div>
          <div className=" bg-neutral-300 h-3 w-3 rounded-full"></div>
          <div className=" bg-neutral-300 h-3 w-3 rounded-full"></div>
          <div className=" bg-neutral-300 h-3 w-3 rounded-full"></div>
          <div className=" bg-neutral-300 h-3 w-3 rounded-full"></div>
          <div className=" bg-neutral-300 h-3 w-3 rounded-full"></div>
        </div>
        <div className="grid grid-cols-3 text-2xl font-bold underline text-center space-y-10 -mb-4">
          <p className="mt-10">1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p className="text-green-500 text-lg underline">Sign Out</p>
          <p>2</p>
          <p className="text-green-500 text-lg underline">Delete</p>
        </div>
      </div>
    </>
  );
};

export default welcomeBack;
