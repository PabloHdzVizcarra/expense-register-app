import React from 'react';
import { ContainerErrorMessage, ParagraphError } from './Styles';
import PropTypes from 'prop-types';

export const ErrorMessage = ({ message }) => {
  return (
    <ContainerErrorMessage
      className='animate__animated animate__flipInX'
    >
      <ParagraphError>{message}</ParagraphError>
    </ContainerErrorMessage>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
}
