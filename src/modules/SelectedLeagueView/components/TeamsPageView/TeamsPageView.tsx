import React from 'react'

export interface ITeamsPageView {
  selectedView: string
  changeViewFn: (value: string) => void
}

const TeamsPageView: React.FC<ITeamsPageView> = () => {
  return <div>asdfgs</div>
}

export default TeamsPageView
