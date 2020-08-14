import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { HomePage } from '../pages/home-page/HomePage';
import { PrivateRoute } from './PrivateRoute';
import { firebaseGetActiveUser} from '../helpers/firebase-get-active-user'
import { useAuth } from '../context/auth-context';
import { PublicRoute } from './PublicRoute';
import { PageRouter } from './PageRouter';

export const AppRouter = () => {

  const [{ isActive, activeUserData }, dispatch] = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    firebaseGetActiveUser(dispatch, setIsLoading);
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading</p>
  }

  console.log(isActive);
  return (
    <Router>
      <div>
        <Switch>
          
          <PublicRoute 
            path="/home"
            component={PageRouter}
            isAutheticated={isActive}
          />

          <PrivateRoute
            component={HomePage}
            exact
            isAutheticated={isActive}
            path="/"
          />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}
