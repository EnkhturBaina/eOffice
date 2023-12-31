import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [selectedParentMenu, setSelectedParentMenu] = useState(2);
  const [sidebarShow, setSidebarShow] = useState(false);

  return (
    <MainContext.Provider
      value={{
        selectedParentMenu,
        setSelectedParentMenu,
        sidebarShow,
        setSidebarShow,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
export default MainContext;

