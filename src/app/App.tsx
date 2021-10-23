import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { publicRoutes, privateRoutes } from 'shared/routes'
import PrivateRoute from 'shared/routes/components/PrivateRoute'
import PublicRoute from 'shared/routes/components/PublicRoute'
import CssBaseline from '@mui/material/CssBaseline'
import { Container } from './App.style'

const inputBaselineStyles = <CssBaseline />

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {inputBaselineStyles}
      <Container>
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
      </Container>
    </BrowserRouter>
  )
}

export default App
