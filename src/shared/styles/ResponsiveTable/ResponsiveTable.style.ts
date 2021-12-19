import { styled } from '@mui/material'
import { colors } from 'config'

export const ResponsiveTableContainer = styled('div')`
  display: flex;
  width: 100%;
`

export const ResponsiveSubtableWrapper = styled('div')`
  position: relative;
  min-width: 80%;
  overflow-x: hidden;
  white-space: nowrap;
  flex-grow: 1;

  & > div {
    overflow-x: auto;
  }

  & table {
    border-collapse: collapse;
  }

  & thead th {
    /* position: sticky; */
    top: 0;
    background-color: black;
  }

  & tbody td {
  }

  & tbody td:nth-last-of-type(1) {
    padding-right: 20px;
  }
`

export const StaticSubtableWrapper = styled('div')`
  position: relative;
  z-index: 1;
  white-space: nowrap;

  & tbody {
    box-shadow: ${colors.components.secondary} -10px 0px 20px 0px;

    & tr:nth-of-type(even): {
      & td {
        background-color: ${colors.components.primary};
      }
    }
  }

  & > table {
    table-layout: fixed;
  }

  & thead th {
    /* position: sticky; */
    top: 0;
    background-color: black;
  }
`
