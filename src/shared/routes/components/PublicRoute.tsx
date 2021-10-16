import { Route, Redirect } from 'react-router-dom'

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
  const isAuthenticated = localStorage.getItem('authKey')
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
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
