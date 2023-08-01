import React, { useContext, useState } from 'react';
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index';
import { CImage } from '@coreui/react';
import main_logo from 'src/assets/main_logo.png';
import avatarImg from 'src/assets/images/avatars/2.jpg';
import MainContext from 'src/context/MainContext';
import CIcon from '@coreui/icons-react';
import { cilAvTimer, cilBell, cilChatBubble, cilGroup, cilSettings, freeSet } from '@coreui/icons';
import { useNavigate } from 'react-router-dom';

const DefaultLayout = () => {
   const state = useContext(MainContext);
   const [hoverItem, setHoverItem] = useState(null);
   const navigate = useNavigate();
   const menus = [
      {
         id: 0,
         className: 'icon icon-b',
         text: 'FRM'
      },
      {
         id: 1,
         text: 'HRM'
      },
      {
         id: 2,
         icon: cilSettings
      },
      {
         id: 3,
         icon: freeSet.cilMediaEject
      }
   ];
   const bottom_menus = [
      {
         id: 10,
         icon: cilAvTimer
      },
      {
         id: 11,
         icon: cilChatBubble
      },
      {
         id: 12,
         icon: cilGroup,
         isHideSidebar: true
      },
      {
         id: 13,
         icon: cilBell
      },
      {
         id: 99,
         isProfile: true,
         isHideSidebar: true
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
                           onClick={() => {
                              state.setSelectedParentMenu(item.id);
                              item.isHideSidebar ? state.setSidebarShow(false) : state.setSidebarShow(true);
                           }}
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
                              {item.icon ? (
                                 <CIcon
                                    icon={item.icon}
                                    className={
                                       hoverItem === item.id || state.selectedParentMenu === item.id
                                          ? 'main-color'
                                          : 'text-white'
                                    }
                                    size="lg"
                                 />
                              ) : null}
                              {item.text ? (
                                 <span
                                    className={
                                       hoverItem === item.id || state.selectedParentMenu === item.id
                                          ? 'main-color'
                                          : 'text-white'
                                    }
                                    style={{ fontSize: 12, caretColor: 'transparent' }}
                                 >
                                    {item.text}
                                 </span>
                              ) : null}
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
                           onClick={() => {
                              state.setSelectedParentMenu(item.id);
                              item.isHideSidebar ? state.setSidebarShow(false) : state.setSidebarShow(true);
                           }}
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
                              {item.icon ? (
                                 <CIcon
                                    icon={item.icon}
                                    className={
                                       hoverItem === item.id || state.selectedParentMenu === item.id
                                          ? 'main-color'
                                          : 'text-white'
                                    }
                                    size="lg"
                                 />
                              ) : null}
                              {item.isProfile ? (
                                 <CImage
                                    align="start"
                                    rounded
                                    src={avatarImg}
                                    width={20}
                                    height={20}
                                    className="disable-caret"
                                    onClick={() => navigate('/profile')}
                                 />
                              ) : null}
                           </div>
                        </li>
                     );
                  })}
               </ul>
            </div>
         </div>
         {state.sidebarShow ? <AppSidebar /> : null}
         <div
            className={`wrapper d-flex flex-column min-vh-100 ${state.sidebarShow ? 'bg-light' : 'bg-white'}`}
            style={{ paddingLeft: state.sidebarShow ? '22rem' : '6rem' }}
         >
            {/* <AppHeader /> */}
            <div className="body flex-grow-1 main-content-body">
               <AppContent />
            </div>
            {/* <AppFooter /> */}
         </div>
      </div>
   );
};

export default DefaultLayout;
