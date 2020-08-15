import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PublicRoute = ({
  isActive,
  component: Component,
  ...rest
}) => {

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