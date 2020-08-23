import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-column: 2/3;
  grid-row: 2/3;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;