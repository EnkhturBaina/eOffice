import React from 'react';

const Dashboard_MAIN = React.lazy(() => import('./views/dashboard/Dashboard'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));

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

const routes = [
   { path: '/', exact: true, name: 'Home' },
   { path: '/dashboard', name: 'Dashboard', element: Dashboard_MAIN },
   { path: '/theme', name: 'Theme', element: Colors, exact: true },
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
   { path: '/profile', name: 'Profile', element: Profile }
];

export default routes;
