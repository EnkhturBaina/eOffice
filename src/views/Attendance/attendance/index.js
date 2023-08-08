import { cilUser } from '@coreui/icons';
import { Table, Tabs } from 'antd';
import React from 'react';
import { AppHeader } from 'src/components';
import CreateTime from './CreateTime';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

function index() {
   const items = [
      {
         key: '1',
         label: `Ажилтнаар`,
         children: <Tab1 />
      },
      {
         key: '2',
         label: `Ерөнхий дэлгэрэнгүй`,
         children: <Tab2 />
      }
   ];

   const onChange = (key) => {
      console.log(key);
   };

   return (
      <div>
         <AppHeader title="Цагийн бүртгэл" icon={cilUser} />
         <div className="!px-10 !my-2">
            <CreateTime />
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
         </div>
      </div>
   );
}

export default index;
