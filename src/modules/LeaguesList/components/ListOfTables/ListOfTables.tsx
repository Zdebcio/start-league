import moment from 'moment'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { IListOfTables } from 'shared/types'
import Scrollbars from 'react-custom-scrollbars'
import {
  OptionsTableCell,
  StyledEditIcon,
  StyledRemoveIcon,
} from './ListOfTables.style'

const ListOfTables: React.FC<IListOfTables> = ({ tablesList }) => {
  return (
    <Scrollbars>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>League name</TableCell>
            <TableCell align="center">League ID</TableCell>
            <TableCell>Created at</TableCell>
            <TableCell align="center">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tablesList.map((row) => (
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
