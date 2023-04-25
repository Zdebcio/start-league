export enum LoadingStatus {
  Idle = 'idle',
  Pending = 'pending',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export enum AllLeaguesTableColumns {
  LeagueName = 'league_name',
  LeagueID = 'table_id',
  CretedAt = 'created_at',
}

export enum LeagueLadeboardColumns {
  Position = 'position',
  TeamName = 'name',
  Played = 'played',
  Won = 'won',
  Drawn = 'drawn',
  Lost = 'lost',
  Forward = 'handicap',
  Against = 'against',
  Points = 'points',
}

export enum TeamsListColumns {
  TeamName = 'team_name',
  CretedAt = 'created_at',
  UpdatedAt = 'updated_at',
}

export enum ResultsListColumns {
  CretedAt = 'created_at',
}
