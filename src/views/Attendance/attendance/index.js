import { cilUser } from '@coreui/icons';
import { Table } from 'antd';
import React from 'react';
import { AppHeader } from 'src/components';
import CreateTime from './CreateTime';

function index() {
   return (
      <div>
         <AppHeader title="Цагийн бүртгэл" icon={cilUser} />
         <div className="!px-10 !my-2">
            <CreateTime />
         </div>
      </div>
   );
}

export default index;
