import Private from 'shared/components/Private'
import Tables from 'modules/LeaguesList/container/LeaguesList'
import CreateTable from 'modules/CreateLeague/container/CreateLeague'
import SelectedLeagueView from 'modules/SelectedLeagueView/container/SelectedLeagueView'
import StorageIcon from '@mui/icons-material/Storage'
import AccountTreeIcon from '@mui/icons-material/AccountTree'

export default [
  // League
  {
    path: '/leagues',
    component: Tables,
    redirectTo: '/login',
    exact: true,
    navigation: true,
    navigationTitle: 'Tables',
    NavigationIcon: StorageIcon,
  },
  {
    path: '/leagues/create',
    component: CreateTable,
    redirectTo: '/login',
    exact: true,
    navigation: false,
  },
  {
    path: '/leagues/:leagueID',
    component: SelectedLeagueView,
    redirectTo: '/login',
    exact: false,
    navigation: false,
  },

  // Bracket
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
