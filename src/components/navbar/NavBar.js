import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { firebaseSignOut } from './helper-firebase-sign-out'
import { useAuthDispatch } from '../../context/auth-context'

export const NavBar = () => {
  const dispatchAuth = useAuthDispatch();
  const history = useHistory();
  console.log(history);

  const handleSignOut = () => {
    firebaseSignOut(history);
    dispatchAuth({
      isActive: false,
      activeUserData: {}
    })
  }

  return (
    <div>
      <div>
        <h1>@Tu Quincena</h1>
      </div>
      <div>
        <Link to="/">
          Inicio
        </Link>
        <button onClick={handleSignOut}>
          Cerrar Sesion
        </button>
      </div>
    </div>
  )
}
