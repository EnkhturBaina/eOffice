import React, { createContext, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import jwtInterceopter from '../interceptor/index';

const AuthContext = createContext();

import { decryptData, encryptData, openNofi } from 'src/features/comman';

export const AuthContextProvider = ({ children }) => {
   const remember_me = decryptData('remember_me');
   const [user, setUser] = useState(() => {
      if (decryptData('tokens')) {
         let tokens = decryptData('tokens');
         return jwt_decode(tokens.accessToken);
      }
      return null;
   });
   const navigate = useNavigate();
   const login = async (payload) => {
      if (payload.remember_me) {
         console.log(payload.remember_me);
         encryptData('remember_me', payload.email);
      } else {
         localStorage.removeItem('remember_me');
      }
      await jwtInterceopter
         .post('authentication/login', {
            email: payload.email,
            password: payload.password
         })
         .then((response) => {
            encryptData('tokens', response.data.response);
            setUser(jwt_decode(response.data.response.accessToken));
            navigate('/dashboard');
         })
         .catch((error) => {
            if (error.response.data.statusCode === 400) {
               openNofi('warning', 'Амжилтгүй', 'Имэйл юм уу нууц үг буруу');
            }
         });
   };
   const logout = async () => {
      await jwtInterceopter
         .post('authentication/logout')
         .then((response) => {
            if (response.data.success) {
               openNofi('success', 'Амжилттай', 'Системээс амжилттай гарлаа');
            }
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            localStorage.removeItem('tokens');
            setUser(null);
         });
   };

   return <AuthContext.Provider value={{ user, remember_me, login, logout }}>{children}</AuthContext.Provider>;
};
export default AuthContext;
