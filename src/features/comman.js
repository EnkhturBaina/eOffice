import { notification } from 'antd';
import cryptojs from 'crypto-js';

const SECRET_KEY = process.env.REACT_APP_SECURE_LOCAL_STORAGE_HASH_KEY;

export const openNofi = (type, message, description) => {
   notification[type]({
      message: `${message}`,
      description: `${description}`
   });
};
//encrypt hiih
export const encryptData = (name, data) => {
   const encrypted = cryptojs.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
   localStorage.setItem(name, encrypted);
};
// decrypt hiih
export const decryptData = (name) => {
   const encrypted = localStorage.getItem(name);
   if (encrypted === null) {
      return null;
   } else {
      const decrypted = cryptojs.AES.decrypt(encrypted, SECRET_KEY).toString(cryptojs.enc.Utf8);
      return JSON.parse(decrypted);
   }
};
