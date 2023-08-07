import { cilBank } from '@coreui/icons';
import React from 'react';
import { AppHeader } from 'src/components';
import CreateCompany from './CreateCompany';
import Toolbar from './Toolbar';
import List from './List';

function index() {
   return (
      <div>
         <AppHeader title="Компаниуд" icon={cilBank} />
         <CreateCompany />
         <Toolbar />
         <List />
      </div>
   );
}

export default index;
