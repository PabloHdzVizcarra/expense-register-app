import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 20px;
  /* justify-content: center; */
  /* align-items: center; */
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 6px;
`;



export const IconClose = styled.span`
  color: #EF5350;
  cursor: pointer;
  font-size: 25px;

  &:hover {
    color: hsl(8 85% 50% / 1);
  }
`;

export const Button = styled.button`
font-family: 'Titillium Web', sans-serif;
padding: 4px;
border-radius: 6px;
border: 1px solid rgba(0, 0, 0, .1);
cursor: pointer;
background-color: #1E88E5;
font-size: .8rem;
width: 30%;
color: #fff;
margin-top: 10px;

transition: 300ms ease background-color;

&:hover {
  background-color: hsl(208 79% 44% / 1);
  color: #fff;
}

&:focus {
  outline: none;
}

`;

export const InputLabel = styled.label`
  font-weight: 600;
  margin-right: 5px;
  font-family: 'Titillium Web', sans-serif;
`;

export const Input = styled.input`
  font-family: 'Titillium Web', sans-serif;
  background-color: inherit;
  border: none;
  border-bottom: 1px solid white;
  font-size: 1.2rem;
  color: #000;
  background-color: rgba(0, 0, 0, .1);
  width: 100%;
  border-radius: 6px;

  &:focus {
    outline: none;
  }
  
`;

export const Select = styled.select`
  font-family: 'Titillium Web', sans-serif;
  background-color: inherit;
  border: none;
  border-bottom: 1px solid white;
  font-size: 1.2rem;
  color: #000;
  background-color: rgba(0, 0, 0, .1);
  width: 100%;
  border-radius: 6px;

  &:focus {
    outline: none;
  }
  
`;