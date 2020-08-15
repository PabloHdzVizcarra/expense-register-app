import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// import PropTypes from 'prop-types';

export const PrivateRoute = ({
  isActive,
  component: Component,
  ...rest
}) => {

  //localStorage.setItem('lastPath', rest.location.pathname);

  return (
    <Route 
      {...rest}
      component={(props) => (

        (isActive)
          ? (<Component {...props} />)
          : ( <Redirect to="/public" /> )
      )}
    />
  )
}

