import Private from 'shared/components/Private'
import Home from 'modules/Home/container/Home'
import Tables from 'modules/Tables/container/Tables'
import StorageIcon from '@mui/icons-material/Storage'
import AccountTreeIcon from '@mui/icons-material/AccountTree'

export default [
  {
    path: '/tables',
    component: Tables,
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
