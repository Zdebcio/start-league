import Private from 'shared/components/Private'

export default [
  {
    path: '',
    component: Private,
    redirectTo: '/login',
    exact: true,
  },
  {
    path: '/tables',
    component: Private,
    redirectTo: '/login',
    exact: true,
  },
]
