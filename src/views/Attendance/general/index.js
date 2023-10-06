import { cilUser } from '@coreui/icons';
import React from 'react';
import { AppHeader } from 'src/components';
import Stats from './Stats';

function index() {
   return (
      <div>
         <AppHeader title="Үндсэн мэдээлэл" icon={cilUser} />
         <Stats />
      </div>
   );
}

export default index;
