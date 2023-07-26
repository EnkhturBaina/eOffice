import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
   const navigate = useNavigate();

   return <MainContext.Provider value={{}}>{children}</MainContext.Provider>;
};
export default MainContext;
