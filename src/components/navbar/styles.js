import styled from "styled-components";
import { respondTo } from "../../styles/_respondTo";


export const Nav = styled.nav`
  grid-column: 1 /3;
  display: flex;
  background-color: #4527A0;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  /* -webkit-box-shadow: 0px 4px 7px 0px rgba(0,0,0,0.6);
  -moz-box-shadow: 0px 4px 7px 0px rgba(0,0,0,0.6);
  box-shadow: 0px 4px 7px 0px rgba(0,0,0,0.6); */
`;

export const MainTitle = styled.h1`
  margin: 0 0 0 10px;
  color: #fff;

  ${respondTo.md`
    font-size: 2.3rem;
  `}
`;

export const ButtonDelete = styled.button`
  font-family: 'Titillium Web', sans-serif;
  margin-right: 10px;
  padding: 4px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, .1);
  cursor: pointer;
  background-color: #fff;
  font-size: .8rem;

  transition: 300ms ease background-color;

  &:hover {
    background-color: #EF5350;
    color: #fff;
  }

  &:focus {
    outline: none;
  }
  
`;