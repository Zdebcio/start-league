import { useEffect, useState } from 'react'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import NoDataView from 'shared/components/NoDataView/NoDataView'
import ResultsList from 'modules/SelectedLeagueView/components/ResultsList/ResultsList'
import useCheckDesktopScreen from 'shared/hooks/useCheckDesktopScreen'
import {
  fetchSelectedLeagueResults,
  removeResult,
  resetRemoveResultStatus,
} from 'shared/store/leagues/actions'
import {
  getRemoveResultStatus,
  getSelectedLeagueResults,
} from 'shared/store/leagues/selectors'
import { ButtonsControlWrapper } from 'shared/styles/ButtonsControlWrapper.style'
import {
  ContentWindow,
  ContentHeaderWrapper,
} from 'modules/SelectedLeagueView/container/SelectedLeagueView.style'
import CustomDialog from 'shared/components/CustomDialog/CustomDialog'
import { LoadingStatus } from 'shared/types'

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

  const dispatch = useAppDispatch()
  const resultsList = useSelector(getSelectedLeagueResults)
  const removeResultStatus = useSelector(getRemoveResultStatus)
  const [resultToRemove, setResultToRemove] = useState<number | null>(null)

  useEffect(() => {
    dispatch(fetchSelectedLeagueResults({ leagueID }))
  }, [])

  useEffect(() => {
    if (resultToRemove === null) {
      dispatch(resetRemoveResultStatus())
    }
  }, [resultToRemove])

  const handleSetResultToRemoveClick = (resultID: number) => {
    setResultToRemove(resultID)
  }

  const handleRemoveResult = () => {
    if (resultToRemove) {
      dispatch(removeResult({ leagueID, resultID: resultToRemove })).then(
        (res) => {
          if (res.meta.requestStatus === 'fulfilled') {
            dispatch(fetchSelectedLeagueResults({ leagueID }))
            setResultToRemove(null)
          }
        }
      )
    }
  }

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
          <ResultsList
            resultsListData={resultsList}
            handleRemoveFn={handleSetResultToRemoveClick}
          />
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
      <CustomDialog
        isWarning
        title="Are you sure you want to continue removing result?"
        isOpen={typeof resultToRemove === 'number'}
        handleOnClose={() => setResultToRemove(null)}
        handleOnDisagreeClick={() => setResultToRemove(null)}
        handleOnAgreeClick={handleRemoveResult}
        isLoading={removeResultStatus === LoadingStatus.Pending}
        isError={removeResultStatus === LoadingStatus.Failed}
      />
    </>
  )
}

export default ResultsPageView
