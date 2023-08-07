import { Button, Modal, Tabs } from 'antd';
import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
import GeneralCV from '../CV/GeneralCV';
import EducationCV from '../CV/EducationCV';
import SkillCV from '../CV/SkillCV';
import WorkCV from '../CV/WorkCV';
import FamilyCV from '../CV/FamilyCV';
import HistoryCV from '../CV/HistoryCV';

function SendCV() {
   const [isModalOpenCV, setIsModalOpenCV] = useState(false);

   const showModalCV = () => {
      setIsModalOpenCV(true);
   };
   const handleOkCV = () => {
      setIsModalOpenCV(false);
   };
   const handleCancelCV = () => {
      setIsModalOpenCV(false);
   };
   const items = [
      {
         key: '1',
         label: `Ерөнхий мэдээлэл`,
         children: <GeneralCV />
      },
      {
         key: '2',
         label: `Боловсрол`,
         children: <EducationCV />
      },
      {
         key: '3',
         label: `Ур чадвар`,
         children: <SkillCV />
      },
      {
         key: '4',
         label: `Ажил эрхлэлт`,
         children: <WorkCV />
      },
      {
         key: '5',
         label: `Гэр бүл`,
         children: <FamilyCV />
      },
      {
         key: '6',
         label: `Түүхүүд`,
         children: <HistoryCV />
      }
   ];

   const onChange = (key) => {
      console.log(key);
   };
   return (
      <div>
         <div className="flex justify-end">
            <Button type="primary" className="flex items-center" size="middle" onClick={showModalCV}>
               <span className="text-sm">Анкет илгээх</span>
               <PlusCircleOutlined />
            </Button>
         </div>
         <Modal
            title={null}
            open={isModalOpenCV}
            onOk={handleOkCV}
            onCancel={handleCancelCV}
            cancelText="Хаах"
            okText="Үргэлжлүүлэх"
            className="modal-with-count"
            width={1000}
         >
            <div>
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
            </div>
         </Modal>
      </div>
   );
}

export default SendCV;
