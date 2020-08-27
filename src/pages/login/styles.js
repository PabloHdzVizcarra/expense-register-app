import styled from "styled-components";
import { respondTo } from "../../styles/_respondTo";

export const ContainLoginPage = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f1f1;
  color: #fff;
  flex-direction: column;
`;


export const FormContainer = styled.form`
  display: grid;
  width: 85%;
  gap: 20px;
  background-color: #673ab7;
  padding: 1rem;
  border-radius: 6px;
  font-family: 'Titillium Web', sans-serif;
  border: 3px solid rgba(0, 0, 0, .1);
  
  ${respondTo.xs`
    width: 70%;
  `}

  ${respondTo.sm`
    width: 60%;
  `}

  ${respondTo.md`
    width: 50%;
  `}

  ${respondTo.lg`
    width: 40%;
  `}

  ${respondTo.xg`
    width: 30%;
  `}
`;

export const Paragraph = styled.p`
  margin: 2px;
  font-family: 'Titillium Web', sans-serif;
`;

export const ErrorParagraph = styled.p`
  margin: 5px;
  background-color: #f72020;
  border-radius: 6px;
  width: 85%;
  font-size: 1.1rem;
  padding: 5px 15px;
  font-family: 'Titillium Web', sans-serif;

  ${respondTo.xs`
  `}

  ${respondTo.sm`
  `}

  ${respondTo.md`

  `}

  ${respondTo.lg`
  `}

  ${respondTo.xg`
  `}
`;





export const InputData = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  

  input {
    font-family: 'Titillium Web', sans-serif;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    font-size: 1.2rem;
    color: #fff;

    &:focus {
      outline: none;
    }
  }

  label {
    font-size: 1rem;
  }
`;

export const OtherButtons = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 1.2rem;
    color: #fff;
    

    transition: 300ms ease color;

    &:hover {
      color: #82a027;
    }
  }
`;

export const Button = styled.button`
  font-family: 'Titillium Web', sans-serif;
  margin-bottom: 5px;
  padding: 4px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, .1);
  cursor: pointer;
  background-color: #fff;
  font-size: 1.2rem;

  transition: 300ms ease background-color;

  &:hover {
    background-color: hsl(0 0% 90% / 1);
  }

  &:focus {
    outline: none;
  }
  
`;