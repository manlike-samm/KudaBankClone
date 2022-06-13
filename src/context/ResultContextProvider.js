import React, { createContext, useState, useEffect, useContext } from "react";
import { client } from "../client";

export const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState([]),
    [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const query = '*[_type == "userInfo"]';

    setIsLoading(true);

    client.fetch(query).then((data) => {
      setUserInfo(data[1]);
    });
    setIsLoading(false);
  }, []);

  return (
    <ResultContext.Provider value={{ userInfo, isLoading }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
