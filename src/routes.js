import React from 'react';

const Employee = React.lazy(() => import('./views/HRM/employee'));
const Contact = React.lazy(() => import('./views/HRM/contact'));
const Assign = React.lazy(() => import('./views/HRM/assign'));
const Calendar = React.lazy(() => import('./views/HRM/calendar'));
const Command = React.lazy(() => import('./views/HRM/command'));
const Contract = React.lazy(() => import('./views/HRM/contract'));
const Dashboard = React.lazy(() => import('./views/HRM/dashboard'));
const LeaveJob = React.lazy(() => import('./views/HRM/leave-job'));
const Manager = React.lazy(() => import('./views/HRM/manager'));
const Public = React.lazy(() => import('./views/HRM/public'));
const Report = React.lazy(() => import('./views/HRM/report'));
const Request = React.lazy(() => import('./views/HRM/request'));
const TimeReg = React.lazy(() => import('./views/HRM/time-register'));
const Profile = React.lazy(() => import('./views/Profile'));
const Companies = React.lazy(() => import('./views/Settings/companies'));
const Attendance_MAIN = React.lazy(() => import('./views/Attendance/general'));
const Attendance_LIST = React.lazy(() => import('./views/Attendance/attendance'));
const Attendance_REQUEST = React.lazy(() => import('./views/Attendance/request'));

const routes = [
   { path: '/', exact: true, name: 'Home' },
   { path: '/hrm/dashboard', name: 'Dashboard', element: Dashboard },
   { path: '/hrm/employee', name: 'Employee', element: Employee },
   { path: '/hrm/contact', name: 'Contact', element: Contact },
   { path: '/hrm/assign', name: 'Assign', element: Assign },
   { path: '/hrm/calendar', name: 'Calendar', element: Calendar },
   { path: '/hrm/command', name: 'Command', element: Command },
   { path: '/hrm/contract', name: 'Contract', element: Contract },
   { path: '/hrm/leave-job', name: 'LeaveJob', element: LeaveJob },
   { path: '/hrm/manager', name: 'Manager', element: Manager },
   { path: '/hrm/public', name: 'Public', element: Public },
   { path: '/hrm/report', name: 'Report', element: Report },
   { path: '/hrm/request', name: 'Request', element: Request },
   { path: '/hrm/time-register', name: 'TimeReg', element: TimeReg },
   { path: '/profile', name: 'Profile', element: Profile },
   { path: '/settings/companies', name: 'Profile', element: Companies },
   { path: '/attendance/main', name: 'Att Main', element: Attendance_MAIN },
   { path: '/attendance/list', name: 'Att List', element: Attendance_LIST },
   { path: '/attendance/requests', name: 'Att Request', element: Attendance_REQUEST }
];

export default routes;
