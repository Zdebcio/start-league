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
