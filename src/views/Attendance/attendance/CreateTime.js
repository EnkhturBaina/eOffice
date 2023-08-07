import React from 'react';
import { useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Input, Modal, Button } from 'antd';

function CreateTime() {
   const { TextArea } = Input;
   const [isModalOpenCreate, setIsModalOpenCreate] = useState(false);

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
               <span className="text-sm">Цаг бүртгэх</span>
               <PlusCircleOutlined />
            </Button>
         </div>
         <Modal
            title={<span className="main-color">Хүсэлт илгээх</span>}
            open={isModalOpenCreate}
            onOk={handleOkCreate}
            onCancel={handleCancelCreate}
            cancelText="Хаах"
            okText="Илгээх"
            className="modal-with-count"
         >
            <div></div>
         </Modal>
      </div>
   );
}

export default CreateTime;
