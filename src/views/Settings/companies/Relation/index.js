import { Card, Input } from 'antd';
import React from 'react';
import avatar from '../../../../assets/images/avatars/1.jpg';
import { CloseOutlined } from '@ant-design/icons';

function index(props) {
   return (
      <div className="!w-full">
         <Card>
            <div className="flex flex-row justify-end">
               <div>
                  <CloseOutlined
                     className="!ml-3 cursor-pointer"
                     style={{ fontSize: 20 }}
                     onClick={() => {
                        props.setActionType(null);
                     }}
                  />
               </div>
            </div>

            <div className="flex justify-between items-center !mt-2">
               <div className="flex items-center">
                  <img src={avatar} width={60} height={60} />
                  <span className="text-base font-semibold !ml-3">Тайгам Алтай ХХК</span>
               </div>
               <Input placeholder="" size="small" className="w-1/4 h-8" />
            </div>
         </Card>
      </div>
   );
}

export default index;
