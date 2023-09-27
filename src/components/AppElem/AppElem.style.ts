import styled from "styled-components";

export const SCAppElem = styled.div`
  display: flex;
  align-items: center;
  column-gap: calc(0.8vw + 5.2px); //? 20 | 8
  text-align: left;

  .AppImage {
    flex: 0 0 auto;
  }

  .elemDescription {
    flex: 1 1 auto;
  }
`;
