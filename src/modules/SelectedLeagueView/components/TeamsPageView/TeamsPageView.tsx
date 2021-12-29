import { Select, MenuItem, Typography } from '@mui/material'
import {
  ContentWindow,
  ContentHeaderWrapper,
} from 'modules/SelectedLeagueView/container/SelectedLeagueView.style'

export interface ITeamsPageView {
  selectedView: string
  changeViewFn: (value: string) => void
}

const TeamsPageView: React.FC<ITeamsPageView> = ({
  selectedView,
  changeViewFn,
}) => {
  return (
    <>
      <ContentWindow>
        <ContentHeaderWrapper>
          <Typography variant="h4" component="h1">
            League name
          </Typography>
          <Select
            value={selectedView}
            onChange={(event) => changeViewFn(event.target.value)}
            variant="filled"
            disableUnderline
          >
            <MenuItem value="table">Table</MenuItem>
            <MenuItem value="teams">Teams</MenuItem>
          </Select>
        </ContentHeaderWrapper>
      </ContentWindow>
    </>
  )
}

export default TeamsPageView
