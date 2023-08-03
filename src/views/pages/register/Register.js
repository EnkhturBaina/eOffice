import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from 'src/context/AuthContext';
import login_logo from '../../../assets/login_logo.png';
import { Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import CIcon from '@coreui/icons-react';
import { cilArrowRight } from '@coreui/icons';

//Auth login

const Register = () => {
   const navigate = useNavigate();
   const { login, user } = useContext(AuthContext);
   const onFinish = async (values) => {
      const res = await login(values);
   };
   // newtertsn ued login ruu oroh ued butsaagad dashboardru ywulah
   useEffect(() => {
      if (user) {
         navigate('/dashboard');
      }
   }, []);

   return (
      <div className="bg-white min-vh-100 d-flex flex-column !p-10">
         <img align="start" src={login_logo} width={160} height={72} />
         <div className="flex flex-col items-center">
            <span className="main-color text-2xl font-semibold text-center !p-2 !mx-10 !my-6">
               Байгууллагын нөөцийн удирдлагын системд тавтай морил
            </span>
            <span className="text-xl font-semibold text-center !p-2 !mx-5 !my-4 !mt-1">Бүртгүүлэх</span>
            <div className="flex mt-1 flex-col w-1/5">
               <div className="flex gap-3">
                  <div className="w-1/2">
                     <span className="text-xs mt-1">Овог</span>
                     <Input placeholder="Овог" className="mt-1" size="large" />
                  </div>
                  <div className="w-1/2">
                     <span className="text-xs mt-1">Нэр</span>
                     <Input placeholder="Нэр" className="mt-1" size="large" />
                  </div>
               </div>
               <div className="">
                  <span className="text-xs mt-1">Имэйл</span>
                  <Input placeholder="Имэйл" className="mt-1" size="large" />
               </div>
               <div className="">
                  <span className="text-xs mt-1">Утасны дугаар</span>
                  <Input placeholder="00000000" className="mt-1" size="large" />
               </div>
               <div className="!mt-2">
                  <span className="text-xs mt-1">Нууц үг</span>
                  <Input.Password
                     placeholder="*************"
                     className="mt-1"
                     size="large"
                     iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
               </div>
            </div>
            <Button
               type="primary"
               className="w-1/5 flex items-center justify-center mt-3"
               size="large"
               onClick={() => onFinish()}
            >
               <span>Бүртгүүлэх</span>
               <CIcon icon={cilArrowRight} size="lg" className="ml-2" />
            </Button>
            <div className="flex flex-row justify-center w-1/5 my-2 items-center mt-3">
               <span className="text-xs">Бүртгэл байгаа.</span>
               <Link to="/login" className="text-xs main-color cursor-pointer ml-2">
                  Нэвтрэх
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Register;
