import axios from 'axios';
import { decryptData } from 'src/features/comman';
const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

var jwtInterceptor = axios.create({});

jwtInterceptor.defaults.baseURL = DEV_URL;

jwtInterceptor.interceptors.request.use((config) => {
   let tokens = decryptData('tokens');
   if (tokens) {
      config.headers['Authorization'] = `Bearer ${tokens.accessToken}`;
   }
   config.headers['x-api-key'] = API_KEY;
   return config;
});

jwtInterceptor.interceptors.response.use(
   (response) => {
      return response;
   },
   async (error) => {
      const originalConfig = error.config;
      if (originalConfig?.url !== '/login' && error.response) {
         if (error.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;
            try {
               let tokens = JSON.parse(localStorage.getItem('tokens'));
               const response = await axios.get(DEV_URL + 'authentication/refresh', {
                  headers: {
                     Authorization: `Bearer ${tokens.accessToken}`,
                     'refresh-token': tokens.refreshToken,
                     'x-api-key': API_KEY
                  }
               });
               localStorage.setItem('tokens', JSON.stringify(response.data.response));
               error.config.headers['Authorization'] = `Bearer ${response.data.response.accessToken}`;
               error.config.headers['x-api-key'] = API_KEY;
               return axios(error.config);
            } catch (_error) {
               //nofi taniw ugasa buh hugtsa duusaan
               localStorage.removeItem('tokens');
               window.location.href('/login');
               return Promise.reject(_error);
            }
         }
      }
      return Promise.reject(error);
   }
);
export default jwtInterceptor;
