import styled from "styled-components";
import { respondTo } from "../../../../styles/_respondTo";

export const Button = styled.button`
  font-family: 'Titillium Web', sans-serif;
  padding: 4px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, .1);
  cursor: pointer;
  background-color: #6d8c1e;
  font-size: .8rem;
  width: 100%;
  color: #fff;

  transition: 300ms ease background-color;

  &:hover {
    background-color: hsl(77 65% 28% / 1);
    color: #fff;
  }

  &:focus {
    outline: none;
  }

  ${respondTo.sm`
  font-size: 1rem;
  `}

`;