import styled from "styled-components";
import { SCAppWidget } from "../../theme/globalStyle";

export const SCExchangeRate = styled.div`
  flex: 1 1 auto;
`;

export const SCExchangeTable = styled(SCAppWidget)`
  .line {
    width: 100%;

    display: grid;
    grid-template-columns: 2fr repeat(3, 1fr);
    align-items: center;
    padding-bottom: 20px;

    &:last-child {
      border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
    }

    &:not(:first-child) {
      padding: 20px 0;
      border-top: 1px solid ${(props) => props.theme.colors.lightGray};
    }
  }

  .cell {
    flex: 1 1 auto;
    text-align: center;
  }

  .AppElem {
    .AppImage {
      height: calc(1.9vw + 23px); //? 60 | 30
      width: calc(1.9vw + 23px); //? 60 | 30
    }
  }

  .AppLink {
    margin-top: 30px;
  }
`;

export const CalculatorWrapper = styled.div`
  flex: 0 1 35%;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 30px;

  h1 {
    margin: 0;
  }

  button {
    border-radius: 16px;
  }
`;

export const SCExchangeCalculator = styled(SCAppWidget)`
  flex: 1 1 auto;

  h5 {
    margin-bottom: 30px;
  }

  .wannaSell {
    margin-bottom: 50px;
  }
`;
