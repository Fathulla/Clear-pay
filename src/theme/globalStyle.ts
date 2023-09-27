import styled, { createGlobalStyle } from "styled-components";
import { sideBarWidth } from "../components/Sidebar/Sidebar.style";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Inter";
    color: ${(props) => props.theme.colors.mainTextColor};
    background-color: ${(props) => props.theme.colors.footerBgc};
    font-size: calc(0.4vw + 10.6px); //? 18 | 12
  }

  html, body {
    height: 100%;
  }

  button,
  input, select {
    border: 1px solid transparent;
    outline: 0;
    font-family: inherit;
    background-color: transparent;
    /* font-size: inherit; */
    font-size: calc(0.4vw + 10.6px); //? 18 | 12
  }

  a {
    text-decoration: none;
    color: inherit;
    
    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: inherit;
    }
  }

  h1 {
    /* margin: 0 0 calc(1.9vw + 23px) 0; //? 60 | 30 */
    margin: 0 0 ${(props) => props.theme.globalVars.spaceBetweenElems} 0 ;
    font-size: calc(0.7vw + 22.5px); //? 36 | 25
  }

  h3 {
    margin: 0 0 calc(1vw + 20.3px) 0; //? 40 | 24
    font-size: calc(0.2vw + 20.3px); //? 24 | 21
    font-weight: 500;
  }

  h5 {
    font-size: calc(0.4vw + 16.6px);
    font-weight: 500;
  }

  p {
    /* font-size: calc(0.3vw + 13.8px); //? 20 | 15 */
    font-size: calc(0.4vw + 10.6px); //? 18 | 12
  }

  .secondaryText {
    color: ${(props) => props.theme.colors.gray};
  }

  .logo {
    cursor: pointer;
    display: inline-block;
    transition: 200ms;

    &:hover {
      filter: drop-shadow(0 0 5px ${(props) => props.theme.colors.white});
    }
  }

  .logo_small {
    display: none;
    padding: 12px;
    background-color: white;
    border-radius: 10px;
    width: fit-content;
  }

  ._noSelect {
    -webkit-touch-callout: none; //? iOS Safari
    -webkit-user-select: none; //? Safari
    -khtml-user-select: none; //? Konqueror HTML
    -moz-user-select: none; //? Old versions of Firefox
    -ms-user-select: none; //? Internet Explorer/Edge
    user-select: none; //? Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox
  }

  @media ${(props) => props.theme.devices.laptop} {
    .logo {
      display: none;
    }

    .logo_small {
      display: inline-block;
    }
  }
`;

export const SCAppWidget = styled.div`
  border-radius: 16px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 3px 30px 0px ${(props) => props.theme.colors.elemsShadowLight};
  /* padding: calc(1vw + 26.5px) calc(1.6vw + 14.2px); //? 45 - 30 | 45 - 20 */
  /* padding: calc(1.6vw + 14.2px); //? 45 - 20 */
  padding: calc(2.2vw + 1.9px); //? 45 - 10
`;

export const PageElemsWrapper = styled.div`
  display: flex;
  gap: ${(props) => props.theme.globalVars.spaceBetweenElems};
  margin-bottom: ${(props) => props.theme.globalVars.spaceBetweenElems};

  @media ${(props) => props.theme.devices.laptopSmall} {
    flex-direction: column;
  }
`;

export const SCMainWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.bgc};
`;

export const Container = styled.div`
  padding-left: ${sideBarWidth};
  flex: 1 1 auto;

  @media ${(props) => props.theme.devices.laptop} {
    padding-left: 100px;
  }
`;

export const Wrapper = styled.div`
  padding: 30px;
`;
