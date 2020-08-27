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
import { Spinner } from '../components/spinner/Spinner';

export const AppRouter = () => {

  const [{ isActive }, dispatch] = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    firebaseGetActiveUser(dispatch, setIsLoading);
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />
  }
  
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

          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  )
}
