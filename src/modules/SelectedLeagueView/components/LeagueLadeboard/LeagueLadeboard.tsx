import { useState, useEffect } from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material'
import Scrollbars from 'react-custom-scrollbars'
import { fetchSelectedLeagueLadeboard } from 'shared/store/leagues/actions'
import { getSelectedLeagueLadeboard } from 'shared/store/leagues/selectors'
import {
  IListOfTables,
  LeagueLadeboardColumns,
  Order,
  ILeagueTeam,
} from 'shared/types'
import { OptionsTableCell } from 'modules/LeaguesList/components/ListOfTables/ListOfTables.style'

export interface ITeamList {
  leagueID: number
}

const LeagueLadeboard: React.FC<ITeamList> = ({ leagueID }) => {
  const dispatch = useDispatch()
  const leagueLadeboard = useSelector(getSelectedLeagueLadeboard)
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<LeagueLadeboardColumns>(
    LeagueLadeboardColumns.Points
  )

  const handleRequestSort = (property: LeagueLadeboardColumns) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const getComparator = (
    orderValue: Order,
    orderByVale: LeagueLadeboardColumns
  ) => {
    if (orderValue === 'asc') {
      return [...leagueLadeboard].sort((a, b) =>
        a[orderByVale] > b[orderByVale] ? 1 : -1
      )
    }

    return [...leagueLadeboard].sort((a, b) =>
      a[orderByVale] < b[orderByVale] ? 1 : -1
    )
  }

  useEffect(() => {
    dispatch(fetchSelectedLeagueLadeboard({ leagueID }))
  }, [])

  return (
    <Scrollbars>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={orderBy === LeagueLadeboardColumns.TeamName}
                direction={
                  orderBy === LeagueLadeboardColumns.TeamName ? order : 'asc'
                }
                onClick={() =>
                  handleRequestSort(LeagueLadeboardColumns.TeamName)
                }
              >
                Team
              </TableSortLabel>
            </TableCell>
            <TableCell align="center">
              <TableSortLabel
                active={orderBy === LeagueLadeboardColumns.Played}
                direction={
                  orderBy === LeagueLadeboardColumns.Played ? order : 'asc'
                }
                onClick={() => handleRequestSort(LeagueLadeboardColumns.Played)}
              >
                M
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === LeagueLadeboardColumns.Won}
                direction={
                  orderBy === LeagueLadeboardColumns.Won ? order : 'asc'
                }
                onClick={() => handleRequestSort(LeagueLadeboardColumns.Won)}
              >
                W
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === LeagueLadeboardColumns.Lost}
                direction={
                  orderBy === LeagueLadeboardColumns.Lost ? order : 'asc'
                }
                onClick={() => handleRequestSort(LeagueLadeboardColumns.Lost)}
              >
                L
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === LeagueLadeboardColumns.Drawn}
                direction={
                  orderBy === LeagueLadeboardColumns.Drawn ? order : 'asc'
                }
                onClick={() => handleRequestSort(LeagueLadeboardColumns.Drawn)}
              >
                D
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === LeagueLadeboardColumns.Forward}
                direction={
                  orderBy === LeagueLadeboardColumns.Forward ? order : 'asc'
                }
                onClick={() =>
                  handleRequestSort(LeagueLadeboardColumns.Forward)
                }
              >
                GS
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === LeagueLadeboardColumns.Against}
                direction={
                  orderBy === LeagueLadeboardColumns.Against ? order : 'asc'
                }
                onClick={() =>
                  handleRequestSort(LeagueLadeboardColumns.Against)
                }
              >
                GL
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === LeagueLadeboardColumns.Points}
                direction={
                  orderBy === LeagueLadeboardColumns.Points ? order : 'asc'
                }
                onClick={() => handleRequestSort(LeagueLadeboardColumns.Points)}
              >
                Pt
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getComparator(order, orderBy).map((row) => (
            <TableRow>
              <TableCell>{row.name}</TableCell>
              <TableCell align="center">{row.played}</TableCell>
              <TableCell align="center">{row.won}</TableCell>
              <TableCell align="center">{row.lost}</TableCell>
              <TableCell align="center">{row.drawn}</TableCell>
              <TableCell align="center">{row.handicap}</TableCell>
              <TableCell align="center">{row.against}</TableCell>
              <TableCell align="center">{row.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Scrollbars>
  )
}

export default LeagueLadeboard
