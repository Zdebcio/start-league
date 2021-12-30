import config from 'config'
import { Api } from 'shared/services'
import { CreateLeaguePayload, SelectedLeaguePayload } from 'shared/types'

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
}
