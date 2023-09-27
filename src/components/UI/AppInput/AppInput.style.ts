import styled, { css } from "styled-components";

interface IInputProps {
  $borderColor?: string;
  $bgc?: string;
  $hasError: boolean;
}

export const Input = styled.input<Partial<IInputProps>>`
  border: 1px solid
    ${(props) => (props.$borderColor ? props.$borderColor : "transparent")};
  border-radius: 10px;
  padding: 14px 20px;
  padding-right: 40px;

  background-color: ${(props) =>
    props.$bgc ? props.$bgc : props.theme.colors.bgc};
  transition: 200ms;

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholderColor};
  }

  &:not(:disabled) {
    &:hover {
      box-shadow: 0 0 10px 10px ${(props) => props.theme.colors.bgc};
      background-color: ${(props) => props.theme.colors.white};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.colors.primeColor};
    }
  }

  &:disabled {
    cursor: default;
    &:hover {
      opacity: 0.5;
    }
  }
`;

export const InputWrapper = styled.div<IInputProps>`
  position: relative;

  input {
    width: 100%;
  }

  .errorMessage {
    color: ${(props) => props.theme.colors.red};
    margin-top: 10px;
    text-align: center;
  }

  .inputIcon {
    position: absolute;
    top: 50%;
    right: 10px;
    translate: 0 -50%;

    svg {
      width: 23px;
      fill: ${(props) => props.theme.colors.placeholderColor};
    }
  }

  &:has(input:focus) {
    .inputIcon {
      svg {
        fill: ${(props) => props.theme.colors.primeColor};
      }
    }
  }

  ${(props) =>
    props.$hasError &&
    css`
      /* box-shadow: 0 0 10px 2px ${(props) => props.theme.colors.red}; */
      input {
        border: 1px solid ${(props) => props.theme.colors.red};
      }

      .inputIcon {
        top: 30%;

        svg {
          fill: ${(props) => props.theme.colors.red};
        }
      }
    `}
`;
