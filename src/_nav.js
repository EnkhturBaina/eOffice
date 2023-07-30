import React from 'react';
import CIcon from '@coreui/icons-react';
import {
   cilAirplaneMode,
   cilBank,
   cilCalculator,
   cilCalendar,
   cilClipboard,
   cilClock,
   cilCommentBubble,
   cilCommentSquare,
   cilContact,
   cilFile,
   cilFolder,
   cilGroup,
   cilLightbulb,
   cilListFilter,
   cilPhone,
   cilSend,
   cilTrash,
   cilUser,
   cilUserPlus,
   cilUserX
} from '@coreui/icons';
import { CNavGroup, CNavItem } from '@coreui/react';

const _nav = [
   // {
   //    parent: 1,
   //    component: CNavGroup,
   //    name: 'Buttons',
   //    to: '/buttons',
   //    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
   //    items: [
   //       {
   //          component: CNavItem,
   //          name: 'Buttons',
   //          to: '/buttons/buttons'
   //       },
   //       {
   //          component: CNavItem,
   //          name: 'Buttons groups',
   //          to: '/buttons/button-groups'
   //       }
   //    ]
   // },
   {
      parent: 1,
      component: CNavItem,
      name: 'Хянах самбар',
      to: '/dashboard',
      icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />
   },
   {
      parent: 1,
      component: CNavItem,
      name: 'Ажилчид',
      to: '/theme/colors',
      icon: <CIcon icon={cilUser} customClassName="nav-icon" />
   },
   {
      parent: 1,
      component: CNavItem,
      name: 'Холбоо барих',
      to: '/dashboard',
      icon: <CIcon icon={cilPhone} customClassName="nav-icon" />
   },
   {
      parent: 1,
      component: CNavItem,
      name: 'Олон нийт',
      to: '/dashboard',
      icon: <CIcon icon={cilGroup} customClassName="nav-icon" />
   },
   {
      parent: 1,
      component: CNavItem,
      name: 'Календарь',
      to: '/dashboard',
      icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />
   },
   {
      parent: 1,
      component: CNavItem,
      name: 'Ажлын менежер',
      to: '/dashboard',
      icon: <CIcon icon={cilContact} customClassName="nav-icon" />
   },
   {
      parent: 1,
      component: CNavItem,
      name: 'Гэрээ',
      to: '/dashboard',
      icon: <CIcon icon={cilFile} customClassName="nav-icon" />
   },
   {
      parent: 1,
      component: CNavItem,
      name: 'Томилолт',
      to: '/dashboard',
      icon: <CIcon icon={cilAirplaneMode} customClassName="nav-icon" />
   },
   {
      parent: 1,
      component: CNavItem,
      name: 'Хүсэлт',
      to: '/dashboard',
      icon: <CIcon icon={cilLightbulb} customClassName="nav-icon" />
   },
   {
      parent: 1,
      component: CNavItem,
      name: 'Цагийн бүртгэл',
      to: '/dashboard',
      icon: <CIcon icon={cilClock} customClassName="nav-icon" />
   },
   {
      parent: 1,
      component: CNavItem,
      name: 'Тайлан',
      to: '/dashboard',
      icon: <CIcon icon={cilListFilter} customClassName="nav-icon" />
   },
   {
      parent: 1,
      component: CNavItem,
      name: 'Тушаал шийдвэр',
      to: '/dashboard',
      icon: <CIcon icon={cilFolder} customClassName="nav-icon" />
   },
   {
      parent: 1,
      component: CNavItem,
      name: 'Ажлаас гарах',
      to: '/dashboard',
      icon: <CIcon icon={cilUserX} customClassName="nav-icon" />
   },
   {
      parent: 1,
      component: CNavItem,
      name: 'Хүсэлт',
      to: '/dashboard',
      icon: <CIcon icon={cilLightbulb} customClassName="nav-icon" />
   },
   {
      parent: 2,
      component: CNavItem,
      name: 'FRM',
      to: '/dashboard',
      icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />
   },
   {
      parent: 2,
      component: CNavItem,
      name: 'HRM',
      to: '/dashboard',
      icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />
   },
   {
      parent: 2,
      component: CNavItem,
      name: 'Компаниуд',
      to: '/dashboard',
      icon: <CIcon icon={cilBank} customClassName="nav-icon" />
   },
   {
      parent: 2,
      component: CNavItem,
      name: 'Алба хэлтэс',
      to: '/dashboard',
      icon: <CIcon icon={cilGroup} customClassName="nav-icon" />
   },
   {
      parent: 3,
      component: CNavItem,
      name: 'Ирсэн имэйл',
      to: '/dashboard',
      icon: <CIcon icon={cilCommentSquare} customClassName="nav-icon" />
   },
   {
      parent: 3,
      component: CNavItem,
      name: 'Илгээсэн',
      to: '/dashboard',
      icon: <CIcon icon={cilSend} customClassName="nav-icon" />
   },
   {
      parent: 3,
      component: CNavItem,
      name: 'Ноорог',
      to: '/dashboard',
      icon: <CIcon icon={cilLightbulb} customClassName="nav-icon" />
   },
   {
      parent: 3,
      component: CNavItem,
      name: 'Устгасан мэйл',
      to: '/dashboard',
      icon: <CIcon icon={cilTrash} customClassName="nav-icon" />
   },
   {
      parent: 3,
      component: CNavItem,
      name: 'Харилцсан мэйл',
      to: '/dashboard',
      icon: <CIcon icon={cilCommentBubble} customClassName="nav-icon" />
   }
];

export default _nav;
