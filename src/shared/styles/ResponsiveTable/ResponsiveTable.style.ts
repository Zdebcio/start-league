import { styled } from '@mui/material'

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
`

export const StaticSubtableWrapper = styled('div')`
  flex-shrink: 0;
  white-space: nowrap;

  & > table {
    table-layout: fixed;
  }
`
