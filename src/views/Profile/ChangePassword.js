import { CButton } from '@coreui/react';
import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import CIcon from '@coreui/icons-react';
import { cilCheckAlt } from '@coreui/icons';

function ChangePassword() {
   //react-password-checklist PACKAGE
   return (
      <div>
         <p className="main-color font-bold">Нууц үг шинэчлэх</p>
         <div className="flex justify-start mt-1 flex-col w-2/6">
            <div className="basis-1/4">
               <span className="text-xs mt-1">Хуучин нууц үг</span>
               <Input.Password
                  placeholder="*************"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  className="mt-1"
               />
            </div>
            <div className="basis-1/4">
               <span className="text-xs mt-1">Шинэ нууц үг</span>
               <Input.Password
                  placeholder="*************"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  className="mt-1"
               />
            </div>
            <div className="basis-1/4">
               <span className="text-xs mt-1">Шинэ нууц үгийг дахин оруулах</span>
               <Input.Password
                  placeholder="*************"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  className="mt-1"
               />
            </div>
            <div className="basis-1/4">
               <CButton
                  color="dark"
                  variant="ghost"
                  className={`!mt-5 profile-menu-button main-bg-color text-white w-100`}
                  onClick={() => {}}
                  size="sm"
               >
                  Шинэчлэх
               </CButton>
            </div>
            <div className="basis-2/4">
               <div>
                  <CIcon icon={cilCheckAlt} size="sm" />
                  <span className="text-xs">Нууц үг нь 8-32 тэмдэгтийн хооронд байх ёстой.</span>
               </div>
               <div>
                  <CIcon icon={cilCheckAlt} size="sm" />
                  <span className="text-xs">Том үсэг агуулсан байх ёстой.</span>
               </div>
               <div>
                  <CIcon icon={cilCheckAlt} size="sm" />
                  <span className="text-xs">Тоо агуулсан байх ёстой.</span>
               </div>
               <div>
                  <CIcon icon={cilCheckAlt} size="sm" />
                  <span className="text-xs">Нэг тусгай тэмдэгт агуулсан байх ёстой.</span>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ChangePassword;
