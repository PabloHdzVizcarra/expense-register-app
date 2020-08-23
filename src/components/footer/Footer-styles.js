import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #0d47a1;
  grid-column: 1/3;
  grid-row: 3/4;
  height: 2.2rem;
  -webkit-box-shadow: 0px -2px 8px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -2px 8px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px -2px 8px -1px rgba(0, 0, 0, 0.75);
  align-items: center;
  display: flex;
  justify-content: center;

  span {
    color: red;
    margin: 0 5px;
  }
`;

export const Paragraph = styled.p`
  font-size: 14px;
  color: #fff;
  margin: 0;

  span {
    color: red;
  }
`;
