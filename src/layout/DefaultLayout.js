import React, { useContext, useState } from 'react';
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index';
import { CImage } from '@coreui/react';
import main_logo from 'src/assets/main_logo.png';
import MainContext from 'src/context/MainContext';

const DefaultLayout = () => {
   const state = useContext(MainContext);
   const menu = [
      {
         id: 0,
         className: 'icon icon-b'
      },
      {
         id: 1,
         iconUrl: '/src/assets/images/sidebar/settings.svg'
      }
   ];
   return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
         <div className="leftSide">
            <div className="top">
               <CImage align="start" rounded src={main_logo} width={47} height={32} />
               <ul style={{ marginTop: 100 }}>
                  {menu.map((item, index) => {
                     return (
                        <li
                           key={index}
                           className={state.selectedParentMenu === index ? 'active' : ''}
                           onClick={() => state.setSelectedParentMenu(item.id)}
                        >
                           <div className="content">
                              <span
                                 className={
                                    state.selectedParentMenu === index
                                       ? 'icon icon-b disable-caret active'
                                       : 'icon icon-b disable-caret'
                                 }
                              />
                           </div>
                        </li>
                     );
                  })}
               </ul>
            </div>
         </div>
         <AppSidebar />
         <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            {/* <AppHeader /> */}
            <div className="body flex-grow-1 px-3">
               <AppContent />
            </div>
            <AppFooter />
         </div>
      </div>
   );
};

export default DefaultLayout;
