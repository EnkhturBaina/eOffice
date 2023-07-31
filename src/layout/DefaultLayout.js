import React, { useContext, useState } from 'react';
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index';
import { CImage } from '@coreui/react';
import main_logo from 'src/assets/main_logo.png';
import MainContext from 'src/context/MainContext';
import CIcon from '@coreui/icons-react';
import { cilAvTimer, cilBell, cilChatBubble, cilClipboard, cilGroup } from '@coreui/icons';

const DefaultLayout = () => {
   const state = useContext(MainContext);
   const [hoverItem, setHoverItem] = useState(null);
   const menus = [
      {
         id: 0,
         className: 'icon icon-b'
      },
      {
         id: 1
      },
      {
         id: 2
      },
      {
         id: 3
      }
   ];
   const bottom_menus = [
      {
         id: 10,
         className: 'icon icon-b',
         icon: cilAvTimer
      },
      {
         id: 11,
         icon: cilChatBubble
      },
      {
         id: 12,
         icon: cilGroup
      },
      {
         id: 13,
         icon: cilBell
      },
      {
         id: 14,
         icon: cilAvTimer
      }
   ];
   return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
         <div className="leftSide">
            <div className="top">
               <CImage align="start" rounded src={main_logo} width={47} height={32} />
               <ul style={{ marginTop: '50%' }}>
                  {menus.map((item, index) => {
                     return (
                        <li
                           key={index}
                           className={state.selectedParentMenu === index ? 'active' : ''}
                           onClick={() => state.setSelectedParentMenu(item.id)}
                        >
                           <div
                              className={hoverItem === item.id ? 'content hover-style' : 'content'}
                              onMouseEnter={() => {
                                 setHoverItem(item.id);
                              }}
                              onMouseLeave={() => {
                                 setHoverItem(null);
                              }}
                           >
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
            <div className="bottom">
               <ul>
                  {bottom_menus.map((item, index) => {
                     return (
                        <li
                           key={index}
                           className={state.selectedParentMenu === item.id ? 'active' : ''}
                           onClick={() => state.setSelectedParentMenu(item.id)}
                        >
                           <div
                              className={hoverItem === item.id ? 'content hover-style' : 'content'}
                              onMouseEnter={() => {
                                 setHoverItem(item.id);
                              }}
                              onMouseLeave={() => {
                                 setHoverItem(null);
                              }}
                           >
                              <CIcon
                                 icon={item.icon}
                                 className={
                                    hoverItem === item.id || state.selectedParentMenu === item.id
                                       ? 'main-color'
                                       : 'text-white'
                                 }
                                 size="lg"
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
            {/* <AppFooter /> */}
         </div>
      </div>
   );
};

export default DefaultLayout;
