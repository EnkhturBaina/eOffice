import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
   const navigate = useNavigate();
   const [selectedParentMenu, setSelectedParentMenu] = useState(0);

   return <MainContext.Provider value={{ selectedParentMenu, setSelectedParentMenu }}>{children}</MainContext.Provider>;
};
export default MainContext;
