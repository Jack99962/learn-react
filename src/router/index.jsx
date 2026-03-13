import { createBrowserRouter,Navigate } from 'react-router-dom'
import Main from '../page/main'
import Home from '../page/home'
import Mall from '../page/mall'
import User from '../page/user'
import pageOne from '../page/other/pageOne'
import pageTwo from '../page/other/pageTwo'
const router = createBrowserRouter([
  {
    path: '/',
    Component: Main,
    children: [
      {
        path: '/',
        element: <Navigate to="home" replace />,
      },
      {
        path: '/home',
        Component: Home,
      },
      {
        path: '/mall',
        Component: Mall,
      },
      {
        path: '/user',
        Component: User,
      },

      {
        path: '/other',
        children: [
          {
            path: '/other/pageOne',
            Component: pageOne,
          },
          {
            path: '/other/pageTwo',
            Component: pageTwo,
          },
        ]
      },
    ],
  },
])

export default router