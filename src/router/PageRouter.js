import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { StartPage } from '../pages/start-page/StartPage'
import { LoginPage } from '../pages/login/LoginPage'
import { RegisterPage } from '../pages/register/RegisterPage'

export const PageRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/public" component={StartPage} />
        <Route exact path="/public/login" component={LoginPage} />
        <Route exact path="/public/register" component={RegisterPage} />
      </Switch>
    </div>
  )
}
