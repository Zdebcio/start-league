import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { publicRoutes, privateRoutes } from 'shared/routes'
import PrivateRoute from 'shared/routes/components/PrivateRoute'
import PublicRoute from 'shared/routes/components/PublicRoute'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          {publicRoutes.map((route) => (
            <PublicRoute
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
              isRestricted={route.isRestricted}
            />
          ))}
          {privateRoutes.map((route) => (
            <PrivateRoute
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
