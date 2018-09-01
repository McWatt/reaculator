import styled, { css } from "styled-components";

const Button = styled.button`
  background-color: lightblue;
  color: #777;
  font-size: 1em;
  outline: 0;
  border: 1px solid white;

  &:active {
    background-color: darkgrey;
    color: white;
  }

  ${props =>
        props.backgroundColor &&
        css`
      background-color: ${props.backgroundColor};
    `};

  ${props =>
        props.chosen &&
        css`
      background-color: lightskyblue;
    `};

  ${props =>
        props.disabled &&
        css`
      color: lightgrey;
      font-style: italic;
    `};
`;

export default Button;