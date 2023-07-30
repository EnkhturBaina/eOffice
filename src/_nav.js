import React from 'react';
import CIcon from '@coreui/icons-react';
import {
   cilAirplaneMode,
   cilCalendar,
   cilClipboard,
   cilClock,
   cilContact,
   cilFile,
   cilFolder,
   cilGroup,
   cilLightbulb,
   cilListFilter,
   cilPhone,
   cilUser,
   cilUserX
} from '@coreui/icons';
import { CNavItem } from '@coreui/react';

const _nav = [
   {
      parent: 0,
      component: CNavItem,
      name: 'Хянах самбар',
      to: '/dashboard',
      icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />
   },
   {
      parent: 0,
      component: CNavItem,
      name: 'Ажилчид',
      to: '/theme/colors',
      icon: <CIcon icon={cilUser} customClassName="nav-icon" />
   },
   {
      parent: 0,
      component: CNavItem,
      name: 'Холбоо барих',
      to: '/dashboard',
      icon: <CIcon icon={cilPhone} customClassName="nav-icon" />
   },
   {
      parent: 0,
      component: CNavItem,
      name: 'Олон нийт',
      to: '/dashboard',
      icon: <CIcon icon={cilGroup} customClassName="nav-icon" />
   },
   {
      parent: 0,
      component: CNavItem,
      name: 'Календарь',
      to: '/dashboard',
      icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />
   },
   {
      parent: 0,
      component: CNavItem,
      name: 'Ажлын менежер',
      to: '/dashboard',
      icon: <CIcon icon={cilContact} customClassName="nav-icon" />
   },
   {
      parent: 0,
      component: CNavItem,
      name: 'Гэрээ',
      to: '/dashboard',
      icon: <CIcon icon={cilFile} customClassName="nav-icon" />
   },
   {
      parent: 0,
      component: CNavItem,
      name: 'Томилолт',
      to: '/dashboard',
      icon: <CIcon icon={cilAirplaneMode} customClassName="nav-icon" />
   },
   {
      parent: 0,
      component: CNavItem,
      name: 'Хүсэлт',
      to: '/dashboard',
      icon: <CIcon icon={cilLightbulb} customClassName="nav-icon" />
   },
   {
      parent: 0,
      component: CNavItem,
      name: 'Цагийн бүртгэл',
      to: '/dashboard',
      icon: <CIcon icon={cilClock} customClassName="nav-icon" />
   },
   {
      parent: 0,
      component: CNavItem,
      name: 'Тайлан',
      to: '/dashboard',
      icon: <CIcon icon={cilListFilter} customClassName="nav-icon" />
   },
   {
      parent: 0,
      component: CNavItem,
      name: 'Тушаал шийдвэр',
      to: '/dashboard',
      icon: <CIcon icon={cilFolder} customClassName="nav-icon" />
   },
   {
      parent: 0,
      component: CNavItem,
      name: 'Ажлаас гарах',
      to: '/dashboard',
      icon: <CIcon icon={cilUserX} customClassName="nav-icon" />
   },
   {
      parent: 0,
      component: CNavItem,
      name: 'Хүсэлт',
      to: '/dashboard',
      icon: <CIcon icon={cilLightbulb} customClassName="nav-icon" />
   },
   {
      parent: 1,
      component: CNavItem,
      name: 'FRM',
      to: '/dashboard',
      icon: <CIcon icon={cilLightbulb} customClassName="nav-icon" />
   },
   {
      parent: 1,
      component: CNavItem,
      name: 'HRM',
      to: '/dashboard',
      icon: <CIcon icon={cilLightbulb} customClassName="nav-icon" />
   },
   {
      parent: 1,
      component: CNavItem,
      name: 'Компаниуд',
      to: '/dashboard',
      icon: <CIcon icon={cilLightbulb} customClassName="nav-icon" />
   },
   {
      parent: 1,
      component: CNavItem,
      name: 'Алба хэлтэс',
      to: '/dashboard',
      icon: <CIcon icon={cilLightbulb} customClassName="nav-icon" />
   }
];

export default _nav;
