import { cilBank } from '@coreui/icons';
import { Button, Modal } from 'antd';
import React from 'react';
import { AppHeader } from 'src/components';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';

function index() {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const showModal = () => {
      setIsModalOpen(true);
   };
   const handleOk = () => {
      setIsModalOpen(false);
   };
   const handleCancel = () => {
      setIsModalOpen(false);
   };
   return (
      <div>
         <AppHeader title="Компаниуд" icon={cilBank} />
         <div className="flex flex-row items-center !px-10 justify-between">
            <div className="flex justify-end">
               <Button type="primary" className="flex items-center" size="middle" onClick={showModal}>
                  <span className="text-sm">Компани бүртгэх</span>
                  <PlusCircleOutlined />
               </Button>
            </div>
            <Modal
               title={<span className="main-color">Ажлаас чөлөөлөх болох шалтгаан</span>}
               open={isModalOpen}
               onOk={handleOk}
               onCancel={handleCancel}
               cancelText="Хаах"
               okText="Болсон"
               className="modal-with-count"
            >
               <div>{/* <TextArea rows={4} placeholder="Шалтгаанаа бичнэ үү" showCount maxLength={250} /> */}</div>
            </Modal>
         </div>
      </div>
   );
}

export default index;
