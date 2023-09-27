//@ts-nocheck

import React from "react";
import { ReactSVG } from "react-svg";
import styled, { css } from "styled-components";

interface ISVG {
  height?: string;
  width?: string;
  fill?: string;
  transform?: string;
  padding?: string;
  stroke?: string;
  borderRadius?: string;
}

const StyledSVGIcon = styled(ReactSVG)<ISVG>`
  svg {
    ${(props) =>
      props.fill &&
      css`
        fill: ${props.fill};
      `};
    ${(props) =>
      props.stroke &&
      css`
        stroke: ${props.stroke};
      `};

    width: ${(props) => props.width || props.theme.spacing.space.m}px;
    height: ${(props) => props.height || props.theme.spacing.space.m}px;
    ${(props) =>
      props.transform &&
      css`
        transform: ${props.transform};
      `}

    vertical-align: middle;
    padding: ${(props) => props.padding || 0}px;
    border-radius: ${(props) => props.borderRadius || 0}px;
    box-sizing: content-box;
    transition: 200ms;

    path {
      ${(props) =>
        props.fill &&
        !props.stroke &&
        css`
          fill: ${props.fill};
        `}
      ${(props) =>
        props.stroke &&
        css`
          stroke: ${props.stroke};
        `};
    }
  }
`;

interface IIcon extends ISVG {
  name?: string;
  className?: string;
  onClick?: () => void;
}

export const AppIcon: React.FC<IIcon> = ({
  stroke,
  name,
  className,
  height,
  width,
  fill,
  transform,
  onClick,
  ...props
}) => {
  return (
    <StyledSVGIcon
      src={`./img/icons/${name}.svg`}
      className={className}
      fill={fill}
      width={width}
      height={height}
      transform={transform}
      wrapper="span"
      data-testid="icon"
      stroke={stroke}
      onClick={onClick}
      {...props}
    />
  );
};
