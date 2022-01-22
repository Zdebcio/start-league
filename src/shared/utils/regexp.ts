export const usernameRegExp = new RegExp(/^[a-zA-Z0-9]+$/)
export const emailRegExp = new RegExp(
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
)
export const passwordRegExp = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
)
export const leagueNameRegExp = new RegExp(/^[a-zA-Z0-9 _]*$/)
