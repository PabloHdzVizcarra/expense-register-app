import styled from "styled-components";
import { respondTo } from "../../../styles/_respondTo";

export const LayoutContainer = styled.div`
  background-color: #fff;
  grid-column: 1/4;
  grid-row: 2/4;
  padding: 1rem;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${respondTo.md`
    grid-column: 2/4;
    grid-row: 1/4;
    align-items: center;
  `}
`;

export const ExpensesContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  /* max-height: 250px; */
  overflow: auto;

  ${respondTo.sm`
    width: 80%;
    max-height: 70vh;
    overflow: auto;
  `}
  ${respondTo.md`
    width: 80%;
    max-height: 79vh;
    overflow: auto;
  `}

`;

export const ExpenseList = styled.div`
  background-color: #6276ec;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

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
  margin-top: 10px;

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
  width: 40%;
  `}

`;