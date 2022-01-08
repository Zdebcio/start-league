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
import { IResultFromList, ResultsListColumns, Order } from 'shared/types'
import {
  OptionsTableCell,
  StyledRemoveIcon,
} from 'shared/styles/TableControlButton.style'

export interface IResultsList {
  resultsListData: IResultFromList[]
}

const ResultsList: React.FC<IResultsList> = ({ resultsListData }) => {
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<ResultsListColumns>(
    ResultsListColumns.CretedAt
  )

  const handleRequestSort = (property: ResultsListColumns) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const getComparator = (
    orderValue: Order,
    orderByVale: ResultsListColumns
  ) => {
    if (orderValue === 'asc') {
      return [...resultsListData].sort((a, b) =>
        a[orderByVale] > b[orderByVale] ? 1 : -1
      )
    }

    return [...resultsListData].sort((a, b) =>
      a[orderByVale] < b[orderByVale] ? 1 : -1
    )
  }

  return (
    <Scrollbars>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: '100%' }}>Match [Host - Guest]</TableCell>
            <TableCell align="center">Result</TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === ResultsListColumns.CretedAt}
                direction={
                  orderBy === ResultsListColumns.CretedAt ? order : 'asc'
                }
                onClick={() => handleRequestSort(ResultsListColumns.CretedAt)}
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
              <TableCell
                sx={{ width: '100%' }}
              >{`${row.home} - ${row.away}`}</TableCell>
              <TableCell align="center">{`${row.handicap} - ${row.against}`}</TableCell>
              <TableCell>
                {moment(row.created_at).format('DD.MM.YYYY')}
              </TableCell>
              <OptionsTableCell align="center">
                <StyledRemoveIcon />
              </OptionsTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Scrollbars>
  )
}

export default ResultsList
