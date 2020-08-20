import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: 18px;
  margin: 2.5px;
`;
export const ParagraphMoney = styled.p`
  font-size: 3rem;
  margin: 2.5px;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 0 10px;
`;

export const ButtonDelete = styled.button`
  font-family: 'Titillium Web', sans-serif;
  padding: 4px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, .1);
  cursor: pointer;
  background-color: #fff;
  font-size: .8rem;
  width: 100%;

  transition: 300ms ease background-color;

  &:hover {
    background-color: #EF5350;
    color: #fff;
  }

  &:focus {
    outline: none;
  }
  
`;