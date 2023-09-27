import styled from "styled-components";

export let sideBarWidth = "20%";

export const SCSidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  height: 100%;
  width: ${sideBarWidth};

  background-color: ${(props) => props.theme.colors.primeColor};

  background: linear-gradient(
    180deg,
    rgba(25, 41, 124, 1) 0%,
    rgba(7, 11, 33, 1) 100%
  );

  color: ${(props) => props.theme.colors.invertedTextColor};
  padding: 30px 40px;
  padding-right: 0;

  .logo {
    margin-bottom: 120px;
  }

  .logo_small {
    margin-bottom: 60px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
      font-size: calc(0.1vw + 19.5px); //? 22 | 20
      line-height: 125%;

      list-style: none;
    }
  }

  a {
    display: flex;
    align-items: center;
    gap: 25px;

    padding: 15px 20px;
    border-radius: 10px 0 0 10px;
    transition: 300ms cubic-bezier(0, 0, 0.2, 1);

    &:hover {
      text-decoration: none;
      background-color: ${(props) => props.theme.colors.primeColorLight};
    }

    &:active {
      background-color: ${(props) => props.theme.colors.bgc};
      color: ${(props) => props.theme.colors.primeColor};
      svg {
        fill: ${(props) => props.theme.colors.primeColor};
      }
    }

    &._active {
      background-color: ${(props) => props.theme.colors.bgc};
      color: ${(props) => props.theme.colors.primeColor};
      box-shadow: 0 0 10px ${(props) => props.theme.colors.bgc};
      svg {
        fill: ${(props) => props.theme.colors.primeColor};
      }
    }
  }

  @media ${(props) => props.theme.devices.laptop} {
    width: fit-content;
    padding: 30px 20px;

    a {
      border-radius: 10px;
    }

    .route {
      display: none;
    }
  }

  /* @media ${(props) => props.theme.devices.tablet} {
    display: none;
  } */
`;
