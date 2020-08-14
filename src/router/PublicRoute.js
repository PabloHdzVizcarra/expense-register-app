import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuthState } from '../context/auth-context';

export const PublicRoute = ({
  isAutheticated,
  component: Component,
  ...rest
}) => {
  const {isActive} = useAuthState();
  console.log(isActive);

  return (
    <Route
      {...rest}
      component={(props) => (

        (isActive)
          ? (<Redirect to="/" />)
          : (<Component {...props} />)
      )}
    />
  )
}