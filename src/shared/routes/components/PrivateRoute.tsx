import { Route, Redirect } from 'react-router-dom'
import useCheckDesktopScreen from 'shared/hooks/useCheckDesktopScreen'

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
  const isDesktopView = useCheckDesktopScreen()
  const isAuthenticated = localStorage.getItem('authKey')

  const redirectPage = isDesktopView ? '/sign-in' : '/login'
  return (
    <Route
      path={path}
      exact={exact}
      render={() =>
        isAuthenticated ? <Component /> : <Redirect to={redirectPage} />
      }
    />
  )
}

export default PrivateRoute
