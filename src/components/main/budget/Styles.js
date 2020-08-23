import styled from "styled-components";

export const QuoteContainer = styled.div`
  grid-column: 1/4;
  padding: 5px;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Titillium Web', sans-serif;
  background-color: #fff;
  padding-bottom: 16px;
`;

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