import styled from "styled-components";

export const SCHeader = styled.header`
  flex: 0 1 auto;

  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.mainTextColor};
  padding: 25px 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .languageSelect {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const AppSettings = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  .languageSelect {
    .AppImage {
      flex: 0 0 22px;
      height: 22px;
    }
  }

  .AppElem {
    .AppImage {
      height: calc(1vw + 30.3px);
      width: calc(1vw + 30.3px);
    }
  }
`;
