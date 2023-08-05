import React, { useState } from 'react';
import { Button, Card, Modal, Select, Tabs } from 'antd';
import { CloseOutlined, ExportOutlined } from '@ant-design/icons';
import General from './General';
import Education from './Education';
import Skill from './Skill';
import Work from './Work';
import Family from './Family';
import History from './History';
import Contract from './Contract';
import Command from './Command';

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
         label: 'Ерөнхий мэдээлэл'
      },
      {
         value: 1,
         label: 'Боловсролын мэдээлэл'
      },
      {
         value: 2,
         label: 'Ур чадварын мэдээлэл'
      },
      {
         value: 3,
         label: 'Ажил эрхлэлтийн байдал'
      },
      {
         value: 4,
         label: 'Гэр бүлийн байдал'
      },
      {
         value: 5,
         label: 'Түүүхүүд'
      },
      {
         value: 6,
         label: 'Гэрээ'
      },
      {
         value: 7,
         label: 'Тушаал'
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
         label: `Боловсролын мэдээлэл`,
         children: <Education />
      },
      {
         key: '3',
         label: `Ур чадварын мэдээлэл`,
         children: <Skill />
      },
      {
         key: '4',
         label: `Ажил эрхлэлтийн байдал`,
         children: <Work />
      },
      {
         key: '5',
         label: `Гэр бүлийн байдал`,
         children: <Family />
      },
      {
         key: '6',
         label: `Түүхүүд`,
         children: <History />
      },
      {
         key: '7',
         label: `Гэрээ`,
         children: <Contract />
      },
      {
         key: '8',
         label: `Тушаал`,
         children: <Command />
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
                        props.setSelectedUserData(null);
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
            {value === 1 && <Education />}
            {value === 2 && <Skill />}
            {value === 3 && <Work />}
            {value === 4 && <Family />}
            {value === 5 && <History />}
            {value === 6 && <Contract />}
            {value === 7 && <Command />}
            <div className="flex justify-end !mt-12">
               <Button>Засах</Button>
            </div>
         </Card>
      </div>
   );
}

export default index;
