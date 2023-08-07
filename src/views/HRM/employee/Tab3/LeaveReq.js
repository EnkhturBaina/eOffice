import { Button, Input, Modal } from 'antd';
import React from 'react';
import { useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';

function LeaveReq() {
   const { TextArea } = Input;
   const [isModalOpenCreate, setIsModalOpenCreate] = useState(false);
   const employee_list = [
      {
         value: 'jack',
         label: 'Jack'
      },
      {
         value: 'lucy',
         label: 'Lucy'
      },
      {
         value: 'Yiminghe',
         label: 'yiminghe'
      },
      {
         value: 'disabled',
         label: 'Disabled',
         disabled: true
      }
   ];
   const handleChange = (value) => {
      console.log(`selected ${value}`);
   };
   const onSearch = (value) => console.log(value);

   const showModalCreate = () => {
      setIsModalOpenCreate(true);
   };
   const handleOkCreate = () => {
      setIsModalOpenCreate(false);
   };
   const handleCancelCreate = () => {
      setIsModalOpenCreate(false);
   };
   return (
      <div>
         <div className="flex justify-end">
            <Button type="primary" className="flex items-center" size="middle" onClick={showModalCreate}>
               <span className="text-sm">Гарах хүсэлт</span>
               <PlusCircleOutlined />
            </Button>
         </div>
         <Modal
            title={<span className="main-color">Гарах хүсэлт гаргах болсон шалтгаанаа бичнэ үү.</span>}
            open={isModalOpenCreate}
            onOk={handleOkCreate}
            onCancel={handleCancelCreate}
            cancelText="Хаах"
            okText="Илгээх"
            className="modal-with-count"
         >
            <div>
               <TextArea rows={8} placeholder="Шалтгаанаа бичнэ үү" showCount maxLength={500} />
            </div>
         </Modal>
      </div>
   );
}

export default LeaveReq;
