import styled from "styled-components";

export const Button = styled.button`
font-family: 'Titillium Web', sans-serif;
padding: 4px;
border-radius: 6px;
border: 1px solid rgba(0, 0, 0, .1);
cursor: pointer;
background-color: #1E88E5;
font-size: .8rem;
width: 100%;
color: #fff;

transition: 300ms ease background-color;

&:hover {
  background-color: hsl(208 79% 44% / 1);
  color: #fff;
}

&:focus {
  outline: none;
}

`;