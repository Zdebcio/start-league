export interface Example {
  id: string
}

export interface LoginPayload {
  email: string
  passwd: string
}

export interface LoginResponse {
  success: boolean
  response: string
}

export interface RegistrationPayload {
  nickname: string
  email: string
  passwd: string
}

export interface CreateLeaguePayload {
  leagueName: string
}

export interface IUserLeaguesList {
  id: number
  league_name: string
  user_key: number
  table_id: number
  created_at: string
  updated_at: string
}

export interface IListOfTables {
  tablesList: IUserLeaguesList[]
}
export interface SelectedLeagueLadeboardPayload {
  leagueID: number
}

export interface ILeagueTeam {
  position?: number
  name: string
  played: number
  won: number
  drawn: number
  lost: number
  handicap: number
  against: number
  points: number
}

export interface ILeagueLadeboardTeam {
  position: number
  name: string
  played: number
  won: number
  drawn: number
  lost: number
  handicap: number
  against: number
  points: number
}
