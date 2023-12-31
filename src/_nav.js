import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilAirplaneMode,
  cilAvTimer,
  cilBank,
  cilCalculator,
  cilCalendar,
  cilChart,
  cilClipboard,
  cilClock,
  cilCommentBubble,
  cilCommentSquare,
  cilContact,
  cilFile,
  cilFolder,
  cilGroup,
  cilLightbulb,
  cilList,
  cilListFilter,
  cilPhone,
  cilSend,
  cilTrash,
  cilUser,
  cilUserPlus,
  cilUserX,
} from "@coreui/icons";
import { CNavItem } from "@coreui/react";

const _nav = [
  // {
  //    parent: 2,
  //    component: CNavItem,
  //    name: 'Хянах самбар',
  //    to: '/hrm/dashboard',
  //    icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />
  // },
  // {
  //    parent: 2,
  //    component: CNavItem,
  //    name: 'Ажилчид',
  //    to: '/hrm/employee',
  //    icon: <CIcon icon={cilUser} customClassName="nav-icon" />
  // },
  // {
  //    parent: 2,
  //    component: CNavItem,
  //    name: 'Холбоо барих',
  //    to: '/hrm/contact',
  //    icon: <CIcon icon={cilPhone} customClassName="nav-icon" />
  // },
  // {
  //    parent: 2,
  //    component: CNavItem,
  //    name: 'Олон нийт',
  //    to: '/hrm/public',
  //    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />
  // },
  // {
  //    parent: 2,
  //    component: CNavItem,
  //    name: 'Календарь',
  //    to: '/hrm/calendar',
  //    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />
  // },
  // {
  //    parent: 2,
  //    component: CNavItem,
  //    name: 'Ажлын менежер',
  //    to: '/hrm/manager',
  //    icon: <CIcon icon={cilContact} customClassName="nav-icon" />
  // },
  // {
  //    parent: 2,
  //    component: CNavItem,
  //    name: 'Гэрээ',
  //    to: '/hrm/contract',
  //    icon: <CIcon icon={cilFile} customClassName="nav-icon" />
  // },
  // {
  //    parent: 2,
  //    component: CNavItem,
  //    name: 'Томилолт',
  //    to: '/hrm/assign',
  //    icon: <CIcon icon={cilAirplaneMode} customClassName="nav-icon" />
  // },
  // {
  //    parent: 2,
  //    component: CNavItem,
  //    name: 'Хүсэлт',
  //    to: '/hrm/request',
  //    icon: <CIcon icon={cilLightbulb} customClassName="nav-icon" />
  // },
  // {
  //    parent: 2,
  //    component: CNavItem,
  //    name: 'Цагийн бүртгэл',
  //    to: '/hrm/time-register',
  //    icon: <CIcon icon={cilClock} customClassName="nav-icon" />
  // },
  // {
  //    parent: 2,
  //    component: CNavItem,
  //    name: 'Тайлан',
  //    to: '/hrm/report',
  //    icon: <CIcon icon={cilListFilter} customClassName="nav-icon" />
  // },
  // {
  //    parent: 2,
  //    component: CNavItem,
  //    name: 'Тушаал шийдвэр',
  //    to: '/hrm/command',
  //    icon: <CIcon icon={cilFolder} customClassName="nav-icon" />
  // },
  // {
  //    parent: 2,
  //    component: CNavItem,
  //    name: 'Ажлаас гарах',
  //    to: '/hrm/leave-job',
  //    icon: <CIcon icon={cilUserX} customClassName="nav-icon" />
  // },
  {
    parent: 3,
    component: CNavItem,
    name: "Компаниуд",
    to: "/settings/companies",
    icon: <CIcon icon={cilBank} customClassName="nav-icon" />,
  },
  {
    parent: 3,
    component: CNavItem,
    name: "Алба хэлтэс",
    to: "/dashboard",
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    parent: 4,
    component: CNavItem,
    name: "Ирсэн имэйл",
    to: "/dashboard",
    icon: <CIcon icon={cilCommentSquare} customClassName="nav-icon" />,
  },
  {
    parent: 4,
    component: CNavItem,
    name: "Илгээсэн",
    to: "/dashboard",
    icon: <CIcon icon={cilSend} customClassName="nav-icon" />,
  },
  {
    parent: 4,
    component: CNavItem,
    name: "Ноорог",
    to: "/dashboard",
    icon: <CIcon icon={cilLightbulb} customClassName="nav-icon" />,
  },
  {
    parent: 4,
    component: CNavItem,
    name: "Устгасан мэйл",
    to: "/dashboard",
    icon: <CIcon icon={cilTrash} customClassName="nav-icon" />,
  },
  {
    parent: 4,
    component: CNavItem,
    name: "Харилцсан мэйл",
    to: "/dashboard",
    icon: <CIcon icon={cilCommentBubble} customClassName="nav-icon" />,
  },
  {
    parent: 99,
    component: CNavItem,
    name: "Профайл",
    to: "/profile",
    icon: <CIcon icon={cilCommentBubble} customClassName="nav-icon" />,
  },
  {
    parent: 10,
    component: CNavItem,
    name: "Үндсэн мэдээлэл",
    to: "/attendance/main",
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
  },
  {
    parent: 10,
    component: CNavItem,
    name: "Цагийн бүртгэл",
    to: "/attendance/list",
    icon: <CIcon icon={cilAvTimer} customClassName="nav-icon" />,
  },
  {
    parent: 10,
    component: CNavItem,
    name: "Хүсэлтүүд",
    to: "/attendance/requests",
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
  },
  {
    parent: 9,
    component: CNavItem,
    name: "Тайлан",
    to: "/report",
    icon: <CIcon icon={cilCommentBubble} customClassName="nav-icon" />,
  },
];

export default _nav;

