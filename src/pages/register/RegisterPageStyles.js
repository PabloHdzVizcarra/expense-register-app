import styled from "styled-components";

export const FormContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    display: grid;
    gap: 1rem;
  }
`;

export const InputUser = styled.div`
  display: flex;
  flex-direction: column;

  input {
    text-transform: capitalize;
  }
`;

export const InputEmail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputPassword = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OtherButtons = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;