import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;



export const IconClose = styled.span`
  color: red;
  cursor: pointer;
  font-size: 25px;

  &:hover {
    color: #fff;
  }
`;