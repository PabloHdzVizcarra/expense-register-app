import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
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
  console.log(isActive);

  if (isLoading) {
    return <p>Loading</p>
  }

  console.log(isActive);
  return (
    <Router>
      <div>
        <Switch>
          
          <PublicRoute 
            isActive={isActive}
            component={PageRouter}
            path="/public"
          />

          <PrivateRoute
            exact  
            isActive={isActive}
            component={HomePage}
            path="/"
          />

        </Switch>
      </div>
    </Router>
  )
}
