import { cilUser } from '@coreui/icons';
import React from 'react';
import { AppHeader } from 'src/components';

function index() {
   return (
      <div>
         <AppHeader title="Ажилчид" icon={cilUser} />
      </div>
   );
}

export default index;
