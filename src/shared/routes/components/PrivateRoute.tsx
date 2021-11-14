import { Route, Redirect } from 'react-router-dom'
import { Auth } from 'shared/services'

interface IPrivateRoute {
  component: () => JSX.Element
  path: string
  exact: boolean
}

const PrivateRoute: React.FC<IPrivateRoute> = ({
  component: Component,
  path,
  exact,
}) => {
  const isAuthenticated = Auth.getToken()

  return (
    <Route
      path={path}
      exact={exact}
      render={() =>
        isAuthenticated ? <Component /> : <Redirect to="/login" />
      }
    />
  )
}

export default PrivateRoute
