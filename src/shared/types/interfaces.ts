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
