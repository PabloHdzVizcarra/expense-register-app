import React from 'react'
import { FooterContainer, Paragraph } from './styles';

export const Footer = () => {
  return (
    <FooterContainer>
      <Paragraph>
        Made with  
      </Paragraph>
      <span className="material-icons">
        favorite
      </span>
      <Paragraph>
        for the world
      </Paragraph>
    </FooterContainer>
  )
}
