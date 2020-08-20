import React from 'react'
import { NavBar } from '../../components/navbar/NavBar'
import { HomeContainer } from './HomePageStyles'
import { NavIcons } from '../../components/nav-icons/NavIcons'
import { Main } from '../../components/main/Main'
import { Footer } from '../../components/footer/Footer'

export const HomePage = () => {
  return (
    <HomeContainer>
      <NavBar />
      <NavIcons />
      <Main />
      <Footer />
    </HomeContainer>
  )
}
