import GlobalLayout from './_layout';
import IndexPage from '.';
import Login from '@/pages/Login';
import DashBoard from '@/pages/Dashboard';

export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <IndexPage /> },
      { path: '/login', element: <Login /> },
      {
        path: '/dashboard',
        element: <DashBoard />,
      },
    ],
  },
];

export const pages = [
  { route: '/' },
  { route: '/login' },
  { route: '/dashBoard' },
];
