import React from 'react';
import Shareholder from './Shareholder';
import Board from './Board';
import General from './General';
import { Card, Select, Modal, Tabs } from 'antd';
import { CloseOutlined, ExportOutlined } from '@ant-design/icons';
import { useState } from 'react';

function index(props) {
   const [value, setValue] = useState(0);
   const handleChange = (value) => {
      console.log(`selected ${value}`);
      setValue(value);
   };
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
   const onChange = (key) => {
      console.log(key);
   };

   const menus = [
      {
         value: 0,
         label: `Ерөнхий мэдээлэл`
      },
      {
         value: 1,
         label: `Төлөөлөн удирдах зөвлөл`
      },
      {
         value: 2,
         label: `Хувьцаа эзэмшигчид`
      }
   ];
   const items = [
      {
         key: '1',
         label: `Ерөнхий мэдээлэл`,
         children: <General />
      },
      {
         key: '2',
         label: `Төлөөлөн удирдах зөвлөл`,
         children: <Board />
      },
      {
         key: '3',
         label: `Хувьцаа эзэмшигчид`,
         children: <Shareholder />
      }
   ];
   return (
      <div className="!w-full">
         <Card>
            <div className="flex flex-row justify-between">
               <Select
                  defaultValue={'Ерөнхий мэдээлэл'}
                  style={{
                     width: 250
                  }}
                  onChange={handleChange}
                  options={menus}
               />
               <div>
                  <ExportOutlined className="!ml-3 cursor-pointer" style={{ fontSize: 20 }} onClick={showModal} />
                  <CloseOutlined
                     className="!ml-3 cursor-pointer"
                     style={{ fontSize: 20 }}
                     onClick={() => {
                        props.setActionType(null);
                     }}
                  />
                  <Modal
                     title={null}
                     open={isModalOpen}
                     onOk={handleOk}
                     onCancel={handleCancel}
                     width={1000}
                     okText="Засах"
                     cancelText="Хаах"
                  >
                     <Tabs
                        defaultActiveKey="1"
                        items={items.map((el, index) => {
                           return {
                              label: <span className="text-xs">{el.label}</span>,
                              key: index,
                              children: el.children
                           };
                        })}
                        onChange={onChange}
                        className="employee-dtl-tab"
                     />
                  </Modal>
               </div>
            </div>
            {value === 0 && <General />}
            {value === 1 && <Board />}
            {value === 2 && <Shareholder />}
         </Card>
      </div>
   );
}

export default index;
