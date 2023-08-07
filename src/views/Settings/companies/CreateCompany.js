import { Button, Divider, Input, Modal } from 'antd';
import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';

function CreateCompany() {
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
         <div className="flex flex-row items-center !px-10 justify-end">
            <div className="flex justify-end">
               <Button type="primary" className="flex items-center" size="middle" onClick={showModal}>
                  <span className="text-sm">Компани бүртгэх</span>
                  <PlusCircleOutlined />
               </Button>
            </div>
            <Modal
               title={<span className="main-color">Компани бүртгэх</span>}
               open={isModalOpen}
               onOk={handleOk}
               onCancel={handleCancel}
               cancelText="Хаах"
               okText="Бүртгэх"
               className="modal-with-count"
               width={1000}
            >
               <div>
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <span className="main-color font-semibold">А.Ерөнхий боловсрол</span>
                        <Divider className="my-1" />
                        <div className="grid grid-cols-4 gap-4">
                           <div className="flex flex-col">
                              <span className="text-xs text-slate-500 !mb-1">
                                 Компанийн нэр<span className="text-red-500"> *</span>
                              </span>
                              <Input placeholder="" size="small" />
                           </div>
                           <div className="flex flex-col">
                              <span className="text-xs text-slate-500 !mb-1">
                                 УБД<span className="text-red-500"> *</span>
                              </span>
                              <Input placeholder="" size="small" />
                           </div>
                           <div className="flex flex-col">
                              <span className="text-xs text-slate-500 !mb-1">
                                 РД<span className="text-red-500"> *</span>
                              </span>
                              <Input placeholder="" size="small" />
                           </div>
                           <div className="flex flex-col">
                              <span className="text-xs text-slate-500 !mb-1">
                                 Ө/хэлбэр<span className="text-red-500"> *</span>
                              </span>
                              <Input placeholder="" size="small" />
                           </div>
                        </div>
                     </div>
                     <div>
                        <span className="main-color font-semibold">Б.Гүйцэтгэх удирдлага</span>
                        <Divider className="my-1" />
                        <div className="grid grid-cols-3 gap-4">
                           <div className="flex flex-col">
                              <span className="text-xs text-slate-500 !mb-1">
                                 Нэр<span className="text-red-500"> *</span>
                              </span>
                              <Input placeholder="" size="small" />
                           </div>
                           <div className="flex flex-col">
                              <span className="text-xs text-slate-500 !mb-1">
                                 Албан тушаал<span className="text-red-500"> *</span>
                              </span>
                              <Input placeholder="" size="small" />
                           </div>
                           <div className="flex flex-col">
                              <span className="text-xs text-slate-500 !mb-1">
                                 Утас<span className="text-red-500"> *</span>
                              </span>
                              <Input placeholder="" size="small" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <span className="main-color font-semibold">В.Төлөөлөн удирдах зөвлөл</span>
                  <Divider className="my-1" />
                  <div className="grid grid-cols-3 gap-4">
                     <div className="flex flex-col">
                        <span className="text-xs text-slate-500 !mb-1">
                           Нэр<span className="text-red-500"> *</span>
                        </span>
                        <Input placeholder="" size="small" />
                     </div>
                     <div className="flex flex-col">
                        <span className="text-xs text-slate-500 !mb-1">
                           Албан тушаал<span className="text-red-500"> *</span>
                        </span>
                        <Input placeholder="" size="small" />
                     </div>
                     <div className="flex flex-col">
                        <span className="text-xs text-slate-500 !mb-1">
                           Утас<span className="text-red-500"> *</span>
                        </span>
                        <Input placeholder="" size="small" />
                     </div>
                  </div>
                  <div className="flex justify-end !mt-2">
                     <Button size="small">Мөр нэмэх</Button>
                  </div>
                  <span className="main-color font-semibold">Г.Хувьцаа эзэмшигчид</span>
                  <Divider className="my-1" />
                  <div className="grid grid-cols-3 gap-4">
                     <div className="flex flex-col">
                        <span className="text-xs text-slate-500 !mb-1">
                           Овог<span className="text-red-500"> *</span>
                        </span>
                        <Input placeholder="" size="small" />
                     </div>
                     <div className="flex flex-col">
                        <span className="text-xs text-slate-500 !mb-1">
                           Нэр<span className="text-red-500"> *</span>
                        </span>
                        <Input placeholder="" size="small" />
                     </div>
                     <div className="flex flex-col">
                        <span className="text-xs text-slate-500 !mb-1">
                           Хувьцааны хэмжээ<span className="text-red-500"> *</span>
                        </span>
                        <Input placeholder="" size="small" />
                     </div>
                  </div>
                  <div className="flex justify-end !mt-2">
                     <Button size="small">Мөр нэмэх</Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <span className="main-color font-semibold">Д.Холбоо барих</span>
                        <Divider className="my-1" />
                        <div className="grid grid-cols-3 gap-4">
                           <div className="flex flex-col">
                              <span className="text-xs text-slate-500 !mb-1">
                                 Утас<span className="text-red-500"> *</span>
                              </span>
                              <Input placeholder="" size="small" />
                           </div>
                           <div className="flex flex-col">
                              <span className="text-xs text-slate-500 !mb-1">
                                 Имэйл<span className="text-red-500"> *</span>
                              </span>
                              <Input placeholder="" size="small" />
                           </div>
                           <div className="flex flex-col">
                              <span className="text-xs text-slate-500 !mb-1">
                                 Вэбсайт<span className="text-red-500"> *</span>
                              </span>
                              <Input placeholder="" size="small" />
                           </div>
                        </div>
                     </div>
                     <div>
                        <span className="main-color font-semibold">Е.Хаяг</span>
                        <Divider className="my-1" />
                        <div className="grid grid-cols-3 gap-4">
                           <div className="flex flex-col">
                              <span className="text-xs text-slate-500 !mb-1">
                                 Байршил<span className="text-red-500"> *</span>
                              </span>
                              <Input placeholder="" size="small" />
                           </div>
                           <div className="flex flex-col">
                              <span className="text-xs text-slate-500 !mb-1">
                                 Байшин<span className="text-red-500"> *</span>
                              </span>
                              <Input placeholder="" size="small" />
                           </div>
                           <div className="flex flex-col">
                              <span className="text-xs text-slate-500 !mb-1">
                                 Хаалганы дугаар<span className="text-red-500"> *</span>
                              </span>
                              <Input placeholder="" size="small" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </Modal>
         </div>
      </div>
   );
}

export default CreateCompany;
