import Private from 'shared/components/Private'
import Tables from 'modules/Tables/container/Tables'
import CreateTable from 'modules/CreateTable/container/CreateTable'
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
    path: '/tables/create',
    component: CreateTable,
    redirectTo: '/login',
    exact: true,
    navigation: false,
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
