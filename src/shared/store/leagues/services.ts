import config from 'config'
import { Api } from 'shared/services'
import { CreateLeaguePayload } from 'shared/types'

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
}
