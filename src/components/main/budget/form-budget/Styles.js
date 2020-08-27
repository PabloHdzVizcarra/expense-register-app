import styled from "styled-components";
import { respondTo } from "../../../../styles/_respondTo";

export const CashInput = styled.input`
  margin-top: 16px;
  padding: 5px 0;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 18px;

  &:focus {
    outline: none;
  }

  ${respondTo.sm`
    width: 60%;
  `}
`;

export const Button = styled.button`
  font-family: "Titillium Web", sans-serif;
  margin-bottom: 5px;
  padding: 4px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  background-color: #fff;
  width: 100%;

  transition: 300ms ease background;

  &:hover {
    color: #fff;
    background-color: #82a027;
  }

  &:focus {
    outline: none;
  }

  ${respondTo.sm`
    width: 60%;
  `}
`;
