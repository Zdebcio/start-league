import { styled } from '@mui/system'
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled'
import { IListOfTables } from 'shared/types'
import { Scrollbars } from 'react-custom-scrollbars'
import {
  ResponsiveTableContainer,
  StaticSubtableWrapper,
  ResponsiveSubtableWrapper,
} from 'shared/styles/ResponsiveTable/ResponsiveTable.style'

const ListOfTables: React.FC<IListOfTables> = ({ tablesList }) => {
  const CustomTablePagination = styled(TablePaginationUnstyled)`
    & .MuiTablePaginationUnstyled-toolbar {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  `

  return (
    <ResponsiveTableContainer>
      <ResponsiveSubtableWrapper>
        <Scrollbars>
          <div className="table-wrapper">
            <table aria-label="custom pagination table">
              <thead>
                <tr>
                  <th>Name of league</th>
                  <th>League ID</th>
                  <th>Created at</th>
                  <th>Updated at</th>
                </tr>
              </thead>
              <tbody>
                {tablesList.map((row) => (
                  <tr>
                    <td>{row.league_name}</td>
                    <td>{row.table_id}</td>
                    <td>{row.created_at}</td>
                    <td>{row.updated_at}</td>
                  </tr>
                ))}
                {/* {(rowsPerPage > 0
          ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : rows
        ).map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td style={{ width: 160 }} align="right">
              {row.calories}
            </td>
            <td style={{ width: 160 }} align="right">
              {row.fat}
            </td>
          </tr>
        ))}
        {emptyRows > 0 && (
          <tr style={{ height: 41 * emptyRows }}>
            <td colSpan={3} />
          </tr>
        )} */}
              </tbody>
              <tfoot>
                <tr>
                  {/* <CustomTablePagination
            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
            colSpan={3}
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            componentsProps={{
              select: {
                'aria-label': 'rows per page',
              },
              actions: {
                showFirstButton: true,
                showLastButton: true,
              } as any,
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
                </tr>
              </tfoot>
            </table>
          </div>
        </Scrollbars>
      </ResponsiveSubtableWrapper>
      <StaticSubtableWrapper>
        <table aria-label="custom pagination table">
          <thead>
            <tr>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {tablesList.map((row) => (
              <tr>
                <td>aaa</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>aaa</tr>
          </tfoot>
        </table>
      </StaticSubtableWrapper>
    </ResponsiveTableContainer>
  )
}

export default ListOfTables
