import { cilLightbulb } from '@coreui/icons';
import React from 'react';
import { AppHeader } from 'src/components';
import { Card, Progress, Tabs } from 'antd';
import { UserAddOutlined, FileOutlined, TagOutlined, AlignLeftOutlined } from '@ant-design/icons';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

function index() {
   const onChange = (key) => {
      console.log(key);
   };
   const items = [
      {
         key: '1',
         label: `Хүсэлтийн жагсаалт`,
         children: <Tab1 />
      },
      {
         key: '2',
         label: `Зөвшөөрсөн`,
         children: <Tab2 />
      },
      {
         key: '3',
         label: `Татгалзсан`,
         children: <Tab3 />
      }
   ];
   return (
      <div>
         <AppHeader title="Хүсэлт" icon={cilLightbulb} />
         <div className="!px-10 !my-2">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
         </div>
      </div>
   );
}

export default index;
