import styled from "styled-components";
import { respondTo } from "../../styles/_respondTo";

export const ContainLoginPage = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.theme.colors.p10};
  
`;

export const Paragraph = styled.p`
  margin: 2px;
`;

export const ErrorParagraph = styled.p`
  margin: 5px;
  background-color: #f72020;
  color: white;
  border-radius: 6px;
  padding: 5px 10px 5px 10px;
  width: 83%;
  font-size: 1.1rem;

  ${respondTo.xs`
    width: 73%;
    height: 90%;
  `}

  ${respondTo.sm`
    width: 53%;
  `}

  ${respondTo.md`

  `}

  ${respondTo.lg`
    padding: 15px 10px 15px 10px;
    width: 51%;
  `}

  ${respondTo.xg`
    padding: 15px 10px 15px 10px;
    width: 31%;
  `}
`;



export const FormContainer = styled.form`
  display: grid;
  gap: 1rem;
  width: 80%;
  height: 90%;
  background-color: ${props => props.theme.colors.p4};
  padding: 1rem;
  border-radius: 6px;
  font-family: 'Titillium Web', sans-serif;
  color: white;
  

  ${respondTo.xs`
    width: 70%;
    height: 90%;
  `}

  ${respondTo.sm`
    width: 50%;
  `}

  ${respondTo.md`

  `}

  ${respondTo.lg`

  `}

  ${respondTo.xg`
    width: 30%;
  `}
`;

export const InputData = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.p6};
  padding: 10px 25px 10px 25px;
  border-radius: 5px;
  

  input {
    font-family: 'Titillium Web', sans-serif;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    font-size: 1.2rem;

    &:focus {
      outline: none;
    }
  }

  label {
    color: white;
    font-size: 1.2rem;
  }
`;

export const OtherButtons = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.s};
    font-weight: 700;
    font-size: 1.2rem;

    transition: 300ms ease color;

    &:hover {
      color: ${props => props.theme.colors.s0};
    }
  }
`;

export const Button = styled.button`
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background-color: ${props => props.theme.colors.s4};

  transition: 300ms ease background-color;

  &:hover {
    background-color: ${props => props.theme.colors.s0};
  }

  &:focus {
    outline: none;
  }
  
`;