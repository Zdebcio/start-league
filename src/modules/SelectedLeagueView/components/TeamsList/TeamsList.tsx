import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSelectedLeagueLadeboard } from 'shared/store/leagues/actions'
import { getSelectedLeagueLadeboard } from 'shared/store/leagues/selectors'

export interface ITeamList {
  leagueID: number
}

const TeamsList: React.FC<ITeamList> = ({ leagueID }) => {
  const dispatch = useDispatch()
  const leagueLadeboard = useSelector(getSelectedLeagueLadeboard)

  useEffect(() => {
    dispatch(fetchSelectedLeagueLadeboard({ leagueID }))
  }, [])

  return <div>zxcvb</div>
}

export default TeamsList
