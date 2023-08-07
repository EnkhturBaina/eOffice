import { cilUser } from '@coreui/icons';
import React from 'react';
import { AppHeader } from 'src/components';
import { Tabs } from 'antd';
import Tab1 from './Tab1/index';
import Tab2 from './Tab2/index';
import Tab3 from './Tab3/index';
import Tab4 from './Tab4/index';
import Stats from './Stats';

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
         <Stats />
         <div className="!px-10 !my-2">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
         </div>
      </div>
   );
}

export default index;
