import React from 'react';
import { Card } from 'antd';
import {
   CheckCircleOutlined,
   FieldTimeOutlined,
   HomeOutlined,
   MedicineBoxOutlined,
   UserDeleteOutlined,
   TeamOutlined
} from '@ant-design/icons';
import { MAIN_COLOR } from 'src/constant';

function Stats() {
   return (
      <div>
         <div className="flex flex-row items-center !px-5 justify-between gap-4">
            <Card className="employee-stat-card border-0 w-1/6">
               <TeamOutlined
                  style={{
                     fontSize: 24,
                     padding: 12,
                     color: '#fff',
                     backgroundColor: MAIN_COLOR,
                     borderRadius: '50%'
                  }}
               />
               <div className="flex flex-col !ml-5 !w-full justify-between">
                  <span className="font-bold">120</span>
                  <div className="flex flex-col">
                     <span className="">Нийт ажилчидын тоо</span>
                  </div>
               </div>
            </Card>
            <Card className="employee-stat-card border-0 w-1/6">
               <CheckCircleOutlined
                  style={{
                     fontSize: 24,
                     padding: 12,
                     color: '#fff',
                     backgroundColor: MAIN_COLOR,
                     borderRadius: '50%'
                  }}
               />
               <div className="flex flex-col !ml-5 !w-full justify-between">
                  <span className="font-bold">120</span>
                  <div className="flex flex-col">
                     <span className="">Ажилдаа ирсэн</span>
                  </div>
               </div>
            </Card>
            <Card className="employee-stat-card border-0 w-1/6">
               <FieldTimeOutlined
                  style={{
                     fontSize: 24,
                     padding: 12,
                     color: '#fff',
                     backgroundColor: MAIN_COLOR,
                     borderRadius: '50%'
                  }}
               />
               <div className="flex flex-col !ml-5 !w-full justify-between">
                  <span className="font-bold">120</span>
                  <div className="flex flex-col">
                     <span className="">Чөлөөтэй</span>
                  </div>
               </div>
            </Card>
            <Card className="employee-stat-card border-0 w-1/6">
               <HomeOutlined
                  style={{
                     fontSize: 24,
                     padding: 12,
                     color: '#fff',
                     backgroundColor: MAIN_COLOR,
                     borderRadius: '50%'
                  }}
               />
               <div className="flex flex-col !ml-5 !w-full justify-between">
                  <span className="font-bold">120</span>
                  <div className="flex flex-col">
                     <span className="">Ээлжийн амралт авсан</span>
                  </div>
               </div>
            </Card>
            <Card className="employee-stat-card border-0 w-1/6">
               <MedicineBoxOutlined
                  style={{
                     fontSize: 24,
                     padding: 12,
                     color: '#fff',
                     backgroundColor: MAIN_COLOR,
                     borderRadius: '50%'
                  }}
               />
               <div className="flex flex-col !ml-5 !w-full justify-between">
                  <span className="font-bold">120</span>
                  <div className="flex flex-col">
                     <span className="">Өвчтэй</span>
                  </div>
               </div>
            </Card>
            <Card className="employee-stat-card border-0 w-1/6">
               <UserDeleteOutlined
                  style={{
                     fontSize: 24,
                     padding: 12,
                     color: '#fff',
                     backgroundColor: MAIN_COLOR,
                     borderRadius: '50%'
                  }}
               />
               <div className="flex flex-col !ml-5 !w-full justify-between">
                  <span className="font-bold">120</span>
                  <div className="flex flex-col">
                     <span className="">Тасалсан ажилчид</span>
                  </div>
               </div>
            </Card>
         </div>
      </div>
   );
}

export default Stats;
