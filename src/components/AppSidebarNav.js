import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CBadge } from '@coreui/react';
import { useContext } from 'react';
import MainContext from 'src/context/MainContext';

export const AppSidebarNav = ({ items }) => {
   const state = useContext(MainContext);
   const location = useLocation();
   const navLink = (name, icon, badge) => {
      return (
         <>
            {icon && icon}
            {name && name}
            {badge && (
               <CBadge color={badge.color} className="ms-auto">
                  {badge.text}
               </CBadge>
            )}
         </>
      );
   };

   const navItem = (item, index) => {
      const { component, name, badge, icon, ...rest } = item;
      const Component = component;
      return (
         <Component
            {...(rest.to &&
               !rest.items && {
                  component: NavLink
               })}
            key={index}
            {...rest}
            className="main-text-color !mb-1"
            onClick={() => {
               item.direct_parent_link && state.setSelectedParentMenu(item.direct_parent_link);
            }}
         >
            {navLink(name, icon, badge)}
         </Component>
      );
   };
   const navGroup = (item, index) => {
      const { component, name, icon, to, ...rest } = item;
      const Component = component;
      return (
         <Component
            idx={String(index)}
            key={index}
            toggler={navLink(name, icon)}
            visible={location.pathname.startsWith(to)}
            {...rest}
            className="bg-white"
         >
            {item.items?.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
         </Component>
      );
   };

   return (
      <React.Fragment>
         <div style={{ marginTop: 100 }}></div>
         {items && items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
      </React.Fragment>
   );
};

AppSidebarNav.propTypes = {
   items: PropTypes.arrayOf(PropTypes.any).isRequired
};
