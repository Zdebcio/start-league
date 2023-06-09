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

export interface RegistrationErrors {
  nickname?: {
    Nickname: string
  }
  email?: {
    Email: string
  }
}

export interface AddTeamErrors {
  team_name?: {
    Team_name: string
  }
}

export interface CreateLeaguePayload {
  leagueName: string
}

export interface AddNewTeamPayload {
  teamName: string
  leagueID: number
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
  handleRemoveFn: (leagueID: number) => void
}
export interface SelectedLeaguePayload {
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

export interface ITeamFromList {
  id: number
  table_id: number
  user_key: number
  team_name: string
  created_at: string
  updated_at: string
}

export interface IResultFromList {
  id: number
  table_id: number
  home: string
  away: string
  handicap: number
  against: number
  created_at: string
  updated_at: string
  user_key: number
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

export interface IUserInfo {
  id: string | number
  user_key: string | number
  nickname: string
  email: string
}

export interface ILeagueInfo {
  id: number
  table_id: number
  league_name: string
}

export interface AddNewResultPayload {
  homeTeam: string
  awayTeam: string
  homeScore: string
  awayScore: string
  leagueID: number
}

export interface RemoveLeaguePayload {
  leagueID: number
}

export interface RemoveTeamPayload {
  leagueID: number
  teamName: string | number
}

export interface RemoveResultPayload {
  leagueID: number
  resultID: number
}
