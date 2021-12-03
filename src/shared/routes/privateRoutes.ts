import Private from 'shared/components/Private'
import Home from 'modules/Home/container/Home'
import StorageIcon from '@mui/icons-material/Storage'
import AccountTreeIcon from '@mui/icons-material/AccountTree'

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
    navigation: true,
    navigationTitle: 'Tables',
    NavigationIcon: StorageIcon,
  },
  {
    path: '/brackets',
    component: Private,
    redirectTo: '/login',
    exact: true,
    navigation: true,
    navigationTitle: 'Brackets',
    NavigationIcon: AccountTreeIcon,
  },
]
