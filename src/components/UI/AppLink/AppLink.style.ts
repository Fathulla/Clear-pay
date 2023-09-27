import styled, { css } from "styled-components";

interface IStyledLinkProps {
  $hasIcon?: boolean;
  align?: "right" | "left";
}

export const SCLink = styled.div<IStyledLinkProps>`
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 7px;
  transition: 200ms;

  display: flex;
  align-items: center;
  gap: 14px;

  .linkLabel {
    color: ${(props) => props.theme.colors.gray};
    font-size: calc(0.2px + 14.3px); //? 18 | 15
  }
  ${(props) =>
    !props.$hasIcon &&
    css`
      .linkLabel {
        text-decoration: underline;
      }
    `}

  .linkIcon {
    stroke: ${(props) => props.theme.colors.gray};
  }

  width: fit-content;
  ${(props) =>
    props.align === "right" &&
    css`
      margin-left: auto;
    `}

  &:hover {
    background-color: ${(props) => props.theme.colors.bgc};
    text-decoration: none;
  }

  &:active {
    background-color: ${(props) => props.theme.colors.primeColor};
    span {
      color: white;
    }

    .linkIcon {
      stroke: white;
    }
  }
`;
