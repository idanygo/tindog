import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const newData = await response.json();
    setData(newData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Context.Provider value={{ data, fetchData }}>{children}</Context.Provider>
  );
};
