import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: 18px;
  margin: 2.5px;
  font-family: 'Titillium Web', sans-serif;
`;

export const IconMoney = styled.span`
  border: 1px solid rgba(0, 0, 0, .1);
  padding: 15px;
  border-radius: 50%;
  color: green;
  cursor: pointer;
  color: #2E7D32;
  margin-top: 20px;
  font-size: 25px;

  &:hover {
    background-color: #1976D2;
    color: #fff;
  }
`;

export const ContainerAddBudget = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
`;