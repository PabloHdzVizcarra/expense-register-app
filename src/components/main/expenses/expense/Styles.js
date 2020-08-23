import styled from "styled-components";


export const ContainerExpense = styled.div`
  background-color: rgba(0, 0, 0, .1);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  padding: 10px;
`;

export const NameAndIcon = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.p`
  color: #000;
  margin: 0;
  text-transform: capitalize;
`;

export const TimeParagraph = styled.p`
  color: #000;
  margin: 0;
  text-align: end;
  font-size: 11px;
`;

export const Button = styled.button`
  font-family: 'Titillium Web', sans-serif;
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