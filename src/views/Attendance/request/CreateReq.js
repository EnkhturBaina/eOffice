import React from 'react';
import { useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Input, Modal, Button } from 'antd';

function CreateReq() {
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
               <span className="text-sm">Хүсэлт бүртгэх</span>
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
            <div>
               {/* <div className="grid grid-cols-3 gap-x-4"> */}
               <div>
                  <div className="">
                     <p className="!mb-1 text-sm">Ажилтны нэр</p>
                     <Input placeholder="" />
                  </div>
               </div>
               <div>
                  <div className="">
                     <p className="!mb-1 text-sm">Хүсэлтийн төрөл</p>
                     <Input placeholder="" />
                  </div>
               </div>
               <div>
                  <div className="!mb-4">
                     <p className="!mb-1 text-sm">Тайлбар</p>
                     <TextArea rows={4} placeholder="Шалтгаанаа бичнэ үү" showCount maxLength={250} className="!mt-2" />
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-2">
                  <div>
                     <div className="!mb-4">
                        <p className="!mb-1 text-sm">Эхлэх огноо</p>
                        <Input placeholder="" />
                     </div>
                  </div>
                  <div>
                     <div className="!mb-4">
                        <p className="!mb-1 text-sm">Дуусах огноо</p>
                        <Input placeholder="" />
                     </div>
                  </div>
               </div>
               <div>
                  <div className="">
                     <p className="!mb-1 text-sm">Нийт цаг</p>
                     <Input placeholder="" />
                  </div>
               </div>
               {/* </div> */}
            </div>
         </Modal>
      </div>
   );
}

export default CreateReq;
