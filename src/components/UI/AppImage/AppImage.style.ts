import styled, { css } from "styled-components";

interface IStyledImgProps {
  width?: string;
  height?: string;
  $borderRadius?: string;
}

export const SCImg = styled.div<IStyledImgProps>`
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  overflow: hidden;

  ${(props) =>
    props.$borderRadius &&
    css`
      border-radius: ${props.$borderRadius};
    `};
  ${(props) =>
    props.width &&
    css`
      width: ${props.width}px;
    `};
  ${(props) =>
    props.height &&
    css`
      height: ${props.height}px;
    `};

  .userImage {
    width: 100%;
    height: 100%;
    object-fit: cover;

    text-align: center;
    background-color: ${(props) => props.theme.colors.primeColor};
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

/* line-height: ${(props) => props.height}px; */
