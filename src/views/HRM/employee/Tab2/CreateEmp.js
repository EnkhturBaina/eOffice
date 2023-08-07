import React from 'react';
import { useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Input, Modal, Button } from 'antd';

function CreateEmp() {
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
               <span className="text-sm">Ажилтан бүртгэх</span>
               <PlusCircleOutlined />
            </Button>
         </div>
         <Modal
            title={<span className="main-color">Ерөнхий мэдээлэл</span>}
            open={isModalOpenCreate}
            onOk={handleOkCreate}
            onCancel={handleCancelCreate}
            cancelText="Хаах"
            okText="Болсон"
            className="modal-with-count"
            width={1000}
         >
            <div>
               <div className="grid grid-cols-3 gap-x-4">
                  <div>
                     <div className="">
                        <p className="!mb-1 text-sm">
                           Эцэг /эх/-ийн нэр<span className="text-red-500"> *</span>
                        </p>
                        <Input placeholder="" />
                        <span style={{ fontSize: 10 }}>Криллээр бичнэ үү</span>
                     </div>
                  </div>
                  <div>
                     <div className="">
                        <p className="!mb-1 text-sm">
                           Өөрийн нэр<span className="text-red-500"> *</span>
                        </p>
                        <Input placeholder="" />
                        <span style={{ fontSize: 10 }}>Криллээр бичнэ үү</span>
                     </div>
                  </div>
                  <div>
                     <div className="">
                        <p className="!mb-1 text-sm">
                           Регистерийн дугаар<span className="text-red-500"> *</span>
                        </p>
                        <Input placeholder="" />
                        <span style={{ fontSize: 10 }}>Криллээр бичнэ үү</span>
                     </div>
                  </div>
                  <div>
                     <div className="!mb-4">
                        <p className="!mb-1 text-sm">
                           Компанийн нэр<span className="text-red-500"> *</span>
                        </p>
                        <Input placeholder="" />
                     </div>
                  </div>
                  <div>
                     <div className="!mb-4">
                        <p className="!mb-1 text-sm">Хэлтэс нэгж</p>
                        <Input placeholder="" />
                     </div>
                  </div>
                  <div>
                     <div className="!mb-4">
                        <p className="!mb-1 text-sm">Албан тушаал</p>
                        <Input placeholder="" />
                     </div>
                  </div>
                  <div>
                     <div className="!mb-4">
                        <p className="!mb-1 text-sm">Цалин</p>
                        <Input placeholder="" />
                     </div>
                  </div>
                  <div>
                     <div className="!mb-4">
                        <p className="!mb-1 text-sm">Гар утас</p>
                        <Input placeholder="" />
                     </div>
                  </div>
                  <div>
                     <div className="!mb-4">
                        <p className="!mb-1 text-sm">Цахим шуудан</p>
                        <Input placeholder="" />
                     </div>
                  </div>
                  <div>
                     <div className="grid grid-cols-2 gap-2">
                        <div>
                           <div className="!mb-4">
                              <p className="!mb-1 text-sm">Аймаг, хот</p>
                              <Input placeholder="" />
                           </div>
                        </div>
                        <div>
                           <div className="!mb-4">
                              <p className="!mb-1 text-sm">Сум, дүүрэг</p>
                              <Input placeholder="" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div className="grid grid-cols-2 gap-2">
                        <div>
                           <div className="!mb-4">
                              <p className="!mb-1 text-sm">Баг, хороо</p>
                              <Input placeholder="" />
                           </div>
                        </div>
                        <div>
                           <div className="!mb-4">
                              <p className="!mb-1 text-sm">Хороолол</p>
                              <Input placeholder="" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div className="grid grid-cols-2 gap-2">
                        <div>
                           <div className="!mb-4">
                              <p className="!mb-1 text-sm">Байшин</p>
                              <Input placeholder="" />
                           </div>
                        </div>
                        <div>
                           <div className="!mb-4">
                              <p className="!mb-1 text-sm">Хаалганы дугаар</p>
                              <Input placeholder="" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Modal>
      </div>
   );
}

export default CreateEmp;
