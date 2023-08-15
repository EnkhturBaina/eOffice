import { cilFile } from '@coreui/icons';
import React from 'react';
import { AppHeader } from 'src/components';

function index() {
   return (
      <div>
         <AppHeader title="Тайлан" icon={cilFile} />
         <div className="!px-10 !my-2"></div>
      </div>
   );
}

export default index;
