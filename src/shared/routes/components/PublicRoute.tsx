import { Route, Redirect } from 'react-router-dom'
import { Auth } from 'shared/services'

interface IPublicRoute {
  component: () => JSX.Element
  isRestricted: boolean
  path: string
  exact: boolean
}

const PublicRoute: React.FC<IPublicRoute> = ({
  component: Component,
  isRestricted,
  path,
  exact,
}) => {
  const isAuthenticated = Auth.getToken()
  return (
    <Route
      path={path}
      exact={exact}
      render={() =>
        isAuthenticated && isRestricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component />
        )
      }
    />
  )
}

export default PublicRoute
