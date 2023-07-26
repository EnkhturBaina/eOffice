import React, { createContext, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import jwtInterceopter from '../interceptor/index';

const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
   const [user, setUser] = useState(() => {
      if (localStorage.getItem('tokens')) {
         let tokens = JSON.parse(localStorage.getItem('tokens'));
         return jwt_decode(tokens.accessToken);
      }
      return null;
   });
   const navigate = useNavigate();
   //    if (user) {
   //       console.log(user.exp * 1000);
   //       console.log(Date.now());
   //       if (user.exp * 1000 < Date.now()) {
   //          logout();
   //       }
   //    }
   const login = async (payload) => {
      localStorage.setItem(
         'tokens',
         JSON.stringify({
            accessToken:
               'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMxLCJpYXQiOjE2OTAzNDMzODMsImV4cCI6MTY5MDQyOTc4M30.JhwXuTrqxDCCGw2IpztfZRfU5l6sfA9-xsbMmUf0-Fo',
            refreshToken:
               'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMxLCJpYXQiOjE2OTAzNDMzODMsImV4cCI6MTY5MDQyOTc4M30.QUfz1_Khb6cra0QuhTYmTqIHkty5koFwkH1nVeisLdc'
         })
      );
      navigate('/dashboard');
      // return await axios
      //    .post(DEV_URL + 'authentication/login', payload, {
      //       headers: {
      //          'x-api-key': API_KEY
      //       }
      //    })
      //    .then((response) => {
      //       localStorage.setItem('tokens', JSON.stringify(response.data.response));
      //       setUser(jwt_decode(response.data.response.accessToken));
      //       navigate('/profile');
      //    })
      //    .catch((error) => {
      //       // end NOFICATION esvel TOAST bn aldaani message ogno
      //       // console.log(error);
      //       // if (error.code === 'ERR_NETWORK') {
      //       //    openNofi('error', 'Алдаа', 'Сервертэй холбогдоход алдаа гарлаа');
      //       // } else if (error.response.data.status === 401) {
      //       //    openNofi('warning', 'Даатгал', 'Даатгалтай холбогдож чадсангүй');
      //       // } else if (error.response.status == 400) {
      //       //    openNofi('warning', 'Нэвтрэх', 'Нэвтрэх нэр эсвэл нууц үг буруу');
      //       // }
      //       return false;
      //    });
   };

   const logout = async () => {
      await jwtInterceopter
         .post('authentication/logout')
         .then((response) => {
            console.log(response);
            // localStorage.removeItem('tokens');
            // setUser(null);
            // navigate('/');
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            localStorage.removeItem('tokens');
            setUser(null);
         });
   };

   return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
export default AuthContext;
