import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from 'src/context/AuthContext';
import login_logo from '../../../assets/login_logo.png';
import { Input, Checkbox, Button, Form } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import CIcon from '@coreui/icons-react';
import { cilArrowRight } from '@coreui/icons';
import fb from '../../../assets/images/login/fb.png';
import google from '../../../assets/images/login/google.png';
import linkedin from '../../../assets/images/login/linkedin.png';

//Auth login

const Login = () => {
   const navigate = useNavigate();
   const [loginForm] = Form.useForm();
   const { login, user } = useContext(AuthContext);
   const onFinish = async (values) => {
      console.log('res', res);
      const res = await login(values);
   };
   // newtertsn ued login ruu oroh ued butsaagad dashboardru ywulah
   useEffect(() => {
      if (user) {
         navigate('/dashboard');
      }
   }, []);

   const onChange = (e) => {
      console.log(`checked = ${e.target.checked}`);
   };
   return (
      <div className="bg-white min-vh-100 d-flex flex-column !p-10">
         <img align="start" src={login_logo} width={160} height={72} />
         <div className="flex flex-col items-center">
            <span className="main-color text-2xl font-semibold text-center !p-2 !mx-10 !my-6">
               Байгууллагын нөөцийн удирдлагын системд тавтай морил
            </span>
            <span className="text-xl font-semibold text-center !p-2 !mx-5 !my-4 !mt-1">Нэвтрэх</span>

            <div className="flex mt-1 flex-col w-1/5">
               <Form form={loginForm}>
                  <div className="basis-1/5">
                     <span className="text-xs mt-1">Имэйл</span>
                     <Form.Item
                        // noStyle
                        rules={[
                           {
                              required: true,
                              message: 'Имэйл заавал'
                           },
                           {
                              type: 'email',
                              message: 'Имэйл хэлбэр буруу'
                           }
                        ]}
                        name="email"
                     >
                        <Input type="email" placeholder="Имэйл" className="mt-1" size="large" />
                     </Form.Item>
                  </div>
                  <div className="basis-1/5 !mt-2">
                     <span className="text-xs mt-1">Нууц үг</span>
                     <Form.Item
                        rules={[
                           {
                              required: true,
                              message: 'Нууц үг заавал'
                           }
                        ]}
                        name="password"
                     >
                        <Input.Password
                           placeholder="*************"
                           className="mt-1"
                           size="large"
                           iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                     </Form.Item>
                  </div>
               </Form>
            </div>
            <div className="flex flex-row justify-between w-1/5 my-2">
               <Checkbox onChange={onChange}>Намайг сана</Checkbox>
               <div>
                  <span className="text-xs main-color cursor-pointer">Нууц үг мартсан ?</span>
               </div>
            </div>
            <Button
               type="primary"
               className="w-1/5 flex items-center justify-center"
               size="large"
               onClick={() =>
                  loginForm.validateFields().then(async (values) => {
                     await login(values);
                  })
               }
            >
               <span>Нэвтрэх</span>
               <CIcon icon={cilArrowRight} size="lg" className="ml-2" />
            </Button>
            <div className="flex flex-row justify-end w-1/5 my-3 items-center">
               <span className="text-xs">Өөр бүртгэл байхгүй ?</span>
               <Link to="/register" className="text-xs main-color cursor-pointer ml-2">
                  Бүртгүүлэх
               </Link>
            </div>
            <div className="flex flex-row justify-evenly w-1/5 my-4 items-center">
               <div
                  className="border rounded items-center flex justify-center cursor-pointer"
                  style={{ width: 50, height: 50 }}
               >
                  <img src={fb} width={30} height={30} />
               </div>
               <div
                  className="border rounded items-center flex justify-center cursor-pointer"
                  style={{ width: 50, height: 50 }}
               >
                  <img src={google} width={30} height={30} />
               </div>
               <div
                  className="border rounded items-center flex justify-center cursor-pointer"
                  style={{ width: 50, height: 50 }}
               >
                  <img src={linkedin} width={30} height={30} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
