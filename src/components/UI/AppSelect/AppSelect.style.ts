import styled from "styled-components";

export const SCSelect = styled.select`
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 10px;
  padding-right: 5px;
  width: 100%;
  transition: 200ms;

  &:not(:disabled) {
    &:hover {
      box-shadow: 0 0 10px 10px ${(props) => props.theme.colors.bgc};
      background-color: ${(props) => props.theme.colors.white};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.colors.primeColor};
    }
  }
`;
