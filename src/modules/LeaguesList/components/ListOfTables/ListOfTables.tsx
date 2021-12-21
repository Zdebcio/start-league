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
import { IListOfTables, AllLeaguesTableColumns, Order } from 'shared/types'
import Scrollbars from 'react-custom-scrollbars'
import {
  OptionsTableCell,
  StyledEditIcon,
  StyledRemoveIcon,
} from './ListOfTables.style'

const ListOfTables: React.FC<IListOfTables> = ({ tablesList }) => {
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<AllLeaguesTableColumns>(
    AllLeaguesTableColumns.LeagueName
  )

  const handleRequestSort = (property: AllLeaguesTableColumns) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const getComparator = (
    orderValue: Order,
    orderByVale: AllLeaguesTableColumns
  ) => {
    if (orderValue === 'asc') {
      return [...tablesList].sort((a, b) =>
        a[orderByVale] > b[orderByVale] ? 1 : -1
      )
    }

    return [...tablesList].sort((a, b) =>
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
                active={orderBy === AllLeaguesTableColumns.LeagueName}
                direction={
                  orderBy === AllLeaguesTableColumns.LeagueName ? order : 'asc'
                }
                onClick={() =>
                  handleRequestSort(AllLeaguesTableColumns.LeagueName)
                }
              >
                League name
              </TableSortLabel>
            </TableCell>
            <TableCell align="center">
              <TableSortLabel
                active={orderBy === AllLeaguesTableColumns.LeagueID}
                direction={
                  orderBy === AllLeaguesTableColumns.LeagueID ? order : 'asc'
                }
                onClick={() =>
                  handleRequestSort(AllLeaguesTableColumns.LeagueID)
                }
              >
                League ID
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === AllLeaguesTableColumns.CretedAt}
                direction={
                  orderBy === AllLeaguesTableColumns.CretedAt ? order : 'asc'
                }
                onClick={() =>
                  handleRequestSort(AllLeaguesTableColumns.CretedAt)
                }
              >
                Created at
              </TableSortLabel>
            </TableCell>
            <TableCell align="center">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getComparator(order, orderBy).map((row) => (
            <TableRow>
              <TableCell>{row.league_name}</TableCell>
              <TableCell align="center">{row.table_id}</TableCell>
              <TableCell>
                {moment(row.created_at).format('DD.MM.YYYY')}
              </TableCell>
              <OptionsTableCell align="center">
                <StyledEditIcon />
                <StyledRemoveIcon />
              </OptionsTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Scrollbars>
  )
}

export default ListOfTables
