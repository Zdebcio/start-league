import Login from 'modules/Login/container/Login'

export default [
  {
    path: '/login',
    component: Login,
    isRestricted: false,
    exact: true,
  },
  {
    path: '/sign-in',
    component: Login,
    isRestricted: false,
    exact: true,
  },
  {
    path: '/sign-up',
    component: Login,
    isRestricted: false,
    exact: true,
  },
]
