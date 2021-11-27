import Private from 'shared/components/Private'
import Home from 'modules/Home/container/Home'

export default [
  {
    path: '',
    component: Home,
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
