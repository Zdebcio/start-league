import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import NoDataView from 'shared/components/NoDataView/NoDataView'
import ResultsList from 'modules/SelectedLeagueView/components/ResultsList/ResultsList'
import useCheckDesktopScreen from 'shared/hooks/useCheckDesktopScreen'
import { fetchSelectedLeagueResults } from 'shared/store/leagues/actions'
import { getSelectedLeagueResults } from 'shared/store/leagues/selectors'
import { ButtonsControlWrapper } from 'shared/styles/ButtonsControlWrapper.style'
import {
  ContentWindow,
  ContentHeaderWrapper,
} from 'modules/SelectedLeagueView/container/SelectedLeagueView.style'

export interface IResultsPageView {
  leagueID: number
  leagueName: string
  changeViewFn: (value: string) => void
}

const ResultsPageView: React.FC<IResultsPageView> = ({
  leagueID,
  leagueName,
  changeViewFn,
}) => {
  const isDesktopScreen = useCheckDesktopScreen('sm')

  const dispatch = useDispatch()
  const resultsList = useSelector(getSelectedLeagueResults)

  useEffect(() => {
    dispatch(fetchSelectedLeagueResults({ leagueID }))
  }, [])

  return (
    <>
      <ContentWindow>
        <ContentHeaderWrapper>
          <Typography variant="h5" component="h1">
            <span>{leagueName.length && `${leagueName}: `}</span>
            <span>All Results</span>
          </Typography>
        </ContentHeaderWrapper>
        {resultsList.length > 0 ? (
          <ResultsList resultsListData={resultsList} />
        ) : (
          <NoDataView primaryText="No results added yet." />
        )}
      </ContentWindow>
      <ButtonsControlWrapper>
        <Button
          component={Link}
          to={`/leagues/${leagueID}/results/add`}
          variant="contained"
          disableTouchRipple
          size="small"
          color="secondary"
          sx={isDesktopScreen ? { order: 2, marginRight: '1rem' } : {}}
        >
          Add result
        </Button>
        <Button
          component={Link}
          to={`/leagues/${leagueID}`}
          onClick={() => changeViewFn('table')}
          variant="contained"
          disableTouchRipple
          size="small"
          color="tertiary"
          sx={isDesktopScreen ? { order: 1, marginRight: '1rem' } : {}}
        >
          Back to league
        </Button>
      </ButtonsControlWrapper>
    </>
  )
}

export default ResultsPageView
