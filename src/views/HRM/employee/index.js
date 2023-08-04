import { cilUser } from '@coreui/icons';
import React from 'react';
import { AppHeader } from 'src/components';
import { Card, Progress, Tabs } from 'antd';
import { UserAddOutlined, FileOutlined, TagOutlined, AlignLeftOutlined } from '@ant-design/icons';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';

function index() {
   const onChange = (key) => {
      console.log(key);
   };
   const items = [
      {
         key: '1',
         label: `Жагсаалт`,
         children: <Tab1 />
      },
      {
         key: '2',
         label: `Ажлаас гарсан`,
         children: <Tab2 />
      },
      {
         key: '3',
         label: `Гарах хүсэлт`,
         children: <Tab3 />
      },
      {
         key: '4',
         label: `Анкет илгээсэн`,
         children: <Tab4 />
      }
   ];
   return (
      <div>
         <AppHeader title="Ажилчид" icon={cilUser} />
         <div className="flex flex-row items-center !px-10 justify-between">
            <Card
               style={{
                  width: 320
               }}
               className="employee-stat-card border-0"
            >
               <UserAddOutlined
                  style={{
                     fontSize: 24,
                     padding: 12,
                     color: '#8e88f8',
                     backgroundColor: '#dad7fe',
                     borderRadius: '50%'
                  }}
               />
               <div className="flex flex-col !ml-5 !w-full justify-between">
                  <span className="font-bold">120</span>
                  <div className="flex flex-col">
                     <span className="">Нийт ажилчид</span>
                     <Progress percent={30} strokeColor="#8e88f8" trailColor="#dad7fe" showInfo={false} />
                  </div>
               </div>
            </Card>
            <Card
               style={{
                  width: 320
               }}
               className="employee-stat-card border-0"
            >
               <FileOutlined
                  style={{
                     fontSize: 24,
                     padding: 12,
                     color: '#34b53a',
                     backgroundColor: '#e2fbd7',
                     borderRadius: '50%'
                  }}
               />
               <div className="flex flex-col !ml-5 !w-full justify-between">
                  <span className="font-bold">120</span>
                  <div className="flex flex-col">
                     <span className="">Ажлаас гарсан</span>
                     <Progress percent={30} strokeColor="#34b53a" trailColor="#e2fbd7" showInfo={false} />
                  </div>
               </div>
            </Card>
            <Card
               style={{
                  width: 320
               }}
               className="employee-stat-card border-0"
            >
               <TagOutlined
                  style={{
                     fontSize: 24,
                     padding: 12,
                     color: '#ffe5d3',
                     backgroundColor: '#ff3a29',
                     borderRadius: '50%'
                  }}
               />
               <div className="flex flex-col !ml-5 !w-full justify-between">
                  <span className="font-bold">120</span>
                  <div className="flex flex-col">
                     <span className="">Гарах хүсэлт илгээсэн</span>
                     <Progress percent={30} strokeColor="#ff3a29" trailColor="#ffe5d3" showInfo={false} />
                  </div>
               </div>
            </Card>
            <Card
               style={{
                  width: 320
               }}
               className="employee-stat-card border-0"
            >
               <AlignLeftOutlined
                  style={{
                     fontSize: 24,
                     padding: 12,
                     color: '#fffae6',
                     backgroundColor: '#ffb200',
                     borderRadius: '50%'
                  }}
               />
               <div className="flex flex-col !ml-5 !w-full justify-between">
                  <span className="font-bold">120</span>
                  <div className="flex flex-col">
                     <span className="">Анкет илгээсэн</span>
                     <Progress percent={30} strokeColor="#ffb200" trailColor="#fffae6" showInfo={false} />
                  </div>
               </div>
            </Card>
         </div>
         <div className="!px-10 !my-2">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
         </div>
      </div>
   );
}

export default index;
