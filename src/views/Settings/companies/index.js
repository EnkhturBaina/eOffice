import { cilBank } from '@coreui/icons';
import React, { useState } from 'react';
import { AppHeader } from 'src/components';
import CreateCompany from './CreateCompany';
import Toolbar from './Toolbar';
import List from './List';
import DTL from './DTL/index';
import Relation from './Relation/index';
import { Button } from 'antd';

function index() {
   // 0 => DTL, 1 => Relation
   const [actionType, setActionType] = useState(null);
   return (
      <div>
         <AppHeader title="Компаниуд" icon={cilBank} />
         <CreateCompany />
         <Toolbar />
         <Button size="small" onClick={() => setActionType('DTL')}>
            Мөр нэмэх
         </Button>
         <Button size="small" onClick={() => setActionType('Relation')}>
            Мөр нэмэх
         </Button>
         <Button size="small" onClick={() => setActionType(null)}>
            Мөр нэмэх
         </Button>
         <div className="flex flex-row !gap-4">
            <div className={actionType === null ? 'basis-full' : 'basis-3/5'}>
               <List />
            </div>
            {actionType === 'DTL' ? (
               <div className="basis-2/5">
                  <DTL />
               </div>
            ) : null}
            {actionType === 'Relation' ? (
               <div className="basis-2/5">
                  <Relation />
               </div>
            ) : null}
         </div>
      </div>
   );
}

export default index;
