import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CImage, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react';

import { AppSidebarNav } from './AppSidebarNav';

import main_logo from 'src/assets/main_logo.png';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

// sidebar nav config
import navigation from '../_nav';
import MainContext from 'src/context/MainContext';

const AppSidebar = () => {
   const state = useContext(MainContext);

   const dispatch = useDispatch();
   const unfoldable = useSelector((state) => state.sidebarUnfoldable);
   const sidebarShow = useSelector((state) => state.sidebarShow);

   //Үндсэн Sidebar -н цэснүүдийг PARENT -р ялгаж дамжуулах
   const filteredNav = navigation.filter((employee) => {
      return employee.parent === state.selectedParentMenu;
   });

   return (
      <CSidebar
         position="fixed"
         unfoldable={unfoldable}
         visible={sidebarShow}
         onVisibleChange={(visible) => {
            dispatch({ type: 'set', sidebarShow: visible });
         }}
         className="bg-white"
      >
         <CSidebarNav>
            <SimpleBar>
               <AppSidebarNav items={filteredNav} />
            </SimpleBar>
         </CSidebarNav>
         <CSidebarToggler
            className="d-none d-lg-flex"
            onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
         />
      </CSidebar>
   );
};

export default React.memo(AppSidebar);
