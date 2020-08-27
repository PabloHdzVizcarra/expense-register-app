import styled from "styled-components";
import { respondTo } from "../../styles/_respondTo";


export const ContainerNavIcons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 10px;
  grid-row: 2 / 3;
  grid-column: 1 /2;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, .1);

  ${respondTo.md`
    width: 50px;
  `}
`;

export const IconStyle = styled.span`
  color: #6d8c1e;
`;