import { useState } from 'react'
import moment from 'moment'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material'
import Scrollbars from 'react-custom-scrollbars'
import { ITeamFromList, TeamsListColumns, Order } from 'shared/types'

export interface ITeamsList {
  teamsListData: ITeamFromList[]
}

const TeamsList: React.FC<ITeamsList> = ({ teamsListData }) => {
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<TeamsListColumns>(
    TeamsListColumns.TeamName
  )

  const handleRequestSort = (property: TeamsListColumns) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const getComparator = (orderValue: Order, orderByVale: TeamsListColumns) => {
    if (orderValue === 'asc') {
      return [...teamsListData].sort((a, b) =>
        a[orderByVale] > b[orderByVale] ? 1 : -1
      )
    }

    return [...teamsListData].sort((a, b) =>
      a[orderByVale] < b[orderByVale] ? 1 : -1
    )
  }

  return (
    <Scrollbars>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={orderBy === TeamsListColumns.TeamName}
                direction={
                  orderBy === TeamsListColumns.TeamName ? order : 'asc'
                }
                onClick={() => handleRequestSort(TeamsListColumns.TeamName)}
              >
                Team name
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === TeamsListColumns.CretedAt}
                direction={
                  orderBy === TeamsListColumns.CretedAt ? order : 'asc'
                }
                onClick={() => handleRequestSort(TeamsListColumns.CretedAt)}
              >
                Created at
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getComparator(order, orderBy).map((row) => (
            <TableRow>
              <TableCell>{row.team_name}</TableCell>
              <TableCell>
                {moment(row.created_at).format('DD.MM.YYYY')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Scrollbars>
  )
}

export default TeamsList
