import React from 'react'
import { ContainerNavIcons, IconStyle } from './styles'
import { NavLink } from 'react-router-dom'

export const NavIcons = () => {
  return (
    <ContainerNavIcons>
      <NavLink to="/public">
      <IconStyle className="material-icons">
        home
      </IconStyle>
      </NavLink>
      <NavLink to="/public">
      <IconStyle className="material-icons">
        list
      </IconStyle>
      </NavLink>
      <NavLink to="/public">
      <IconStyle className="material-icons">
        analytics
      </IconStyle>
      </NavLink>
    </ContainerNavIcons>
  )
}
