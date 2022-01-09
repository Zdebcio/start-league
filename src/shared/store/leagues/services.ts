import config from 'config'
import { Api } from 'shared/services'
import {
  AddNewResultPayload,
  AddNewTeamPayload,
  CreateLeaguePayload,
  RemoveLeaguePayload,
  RemoveResultPayload,
  RemoveTeamPayload,
  SelectedLeaguePayload,
} from 'shared/types'

export default class LeaguesApi extends Api {
  public async createLeague({ leagueName }: CreateLeaguePayload) {
    const API = `${config.API_URL}/league/new`

    const configRequest = {
      params: {
        league_name: leagueName,
      },
    }

    return this.api.post(API, configRequest.params)
  }

  public async fetchAllLeaguesList() {
    const API = `${config.API_URL}/league/view/all`

    return this.api.get(API)
  }

  public async fetchSelectedLeagueLadeboard({
    leagueID,
  }: SelectedLeaguePayload) {
    const API = `${config.API_URL}/league/table/view/sorted/${leagueID}`

    return this.api.get(API)
  }

  public async fetchSelectedLeagueTeams({ leagueID }: SelectedLeaguePayload) {
    const API = `${config.API_URL}/league/table/teams/view/${leagueID}`

    return this.api.get(API)
  }

  public async fetchSelectedLeagueResults({ leagueID }: SelectedLeaguePayload) {
    const API = `${config.API_URL}/league/table/view/${leagueID}`

    return this.api.get(API)
  }

  public async fetchSelectedLeagueInfo({ leagueID }: SelectedLeaguePayload) {
    const API = `${config.API_URL}/league/name/${leagueID}`

    return this.api.get(API)
  }

  public async addNewTeam({ teamName, leagueID }: AddNewTeamPayload) {
    const API = `${config.API_URL}/league/table/teams/new/${leagueID}`

    const configRequest = {
      params: {
        team_name: teamName,
      },
    }

    return this.api.post(API, configRequest.params)
  }

  public async addNewResult({
    homeTeam,
    awayTeam,
    homeScore,
    awayScore,
    leagueID,
  }: AddNewResultPayload) {
    const API = `${config.API_URL}/league/table/result/add/${leagueID}`

    const configRequest = {
      params: {
        home: homeTeam,
        away: awayTeam,
        handicap: homeScore,
        against: awayScore,
      },
    }

    return this.api.post(API, configRequest.params)
  }

  public async removeLeague({ leagueID }: RemoveLeaguePayload) {
    const API = `${config.API_URL}/league/delete/${leagueID}`

    return this.api.delete(API)
  }

  public async removeTeam({ leagueID, teamName }: RemoveTeamPayload) {
    const API = `${config.API_URL}/league/delete/${leagueID}/team/${teamName}`

    return this.api.delete(API)
  }

  public async removeResult({ leagueID, resultID }: RemoveResultPayload) {
    const API = `${config.API_URL}/league/delete/${leagueID}/team/result/${resultID}`
    console.log(API)

    return this.api.delete(API)
  }
}
