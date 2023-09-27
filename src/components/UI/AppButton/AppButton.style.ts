import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  padding: 18px 25px;
  background-color: ${(props) => props.theme.colors.primeColor};
  color: white;
  transition: 200ms;
  border-radius: 10px;
  width: 100%;

  &:not(:disabled) {
    &:active {
      background-color: ${(props) => props.theme.colors.bgc};
      color: ${(props) => props.theme.colors.primeColor};
    }
    
    &:hover {
      box-shadow: 0 0 10px ${(props) => props.theme.colors.primeColor};
    }
  }

  &:disabled {
    cursor: default;
    background-color: ${(props) => props.theme.colors.disabledButtonBgc};

    &:hover {
      opacity: 0.5;
    }
  }
`;
