import styled from "styled-components";
import { respondTo } from "../../styles/_respondTo";

export const FormContainer = styled.form`
  display: grid;
  width: 85%;
  gap: 5px;
  background-color: ${props => props.theme.colors.pl};
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