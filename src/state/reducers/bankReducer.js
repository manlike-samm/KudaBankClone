// import { useState, useEffect } from "react";
// import { client } from "../../client";
// import { useResultContext } from "../../context/ResultContextProvider";

// const { userInfo, isLoading } = useResultContext();
const userInfo =
  localStorage.getItem("user") !== "undefined"
    ? JSON.parse(localStorage.getItem("user"))
    : localStorage.clear();

const initialState = userInfo?.accountBalance;
const reducer = (state = initialState, action) => {
  //   const [userInfo, setUserInfo] = useState([]);

  //   useEffect(() => {
  //     const query = '*[_type == "userInfo"]';

  //     client.fetch(query).then((data) => {
  //       setUserInfo(data[1]);
  //     });
  //   }, []);

  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
