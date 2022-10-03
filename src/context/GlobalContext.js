import React, { useState, createContext } from "react";
import { getData } from '../services/Figurinhas';

export const GlobalContext = createContext({});

export function InfoProvider({ children }) {
  const [data, setData] = useState(getData());
  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
}
