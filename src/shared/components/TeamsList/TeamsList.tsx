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
import {
  OptionsTableCell,
  StyledRemoveIcon,
} from 'shared/styles/TableControlButton.style'

export interface ITeamsList {
  teamsListData: ITeamFromList[]
  handleRemoveFn: (teamID: number) => void
}

const TeamsList: React.FC<ITeamsList> = ({ teamsListData, handleRemoveFn }) => {
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
            <TableCell sx={{ width: '50%' }}>
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
            <TableCell sx={{ width: '50%' }}>
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
            <TableCell align="center">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getComparator(order, orderBy).map((row) => (
            <TableRow key={row.id}>
              <TableCell sx={{ width: '50%' }}>{row.team_name}</TableCell>
              <TableCell sx={{ width: '50%' }}>
                {moment(row.created_at).format('DD.MM.YYYY')}
              </TableCell>
              <OptionsTableCell>
                <StyledRemoveIcon onClick={() => handleRemoveFn(row.id)} />
              </OptionsTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Scrollbars>
  )
}

export default TeamsList
