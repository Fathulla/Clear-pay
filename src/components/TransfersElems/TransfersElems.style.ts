import styled from "styled-components";
import { SCAppWidget } from "../../theme/globalStyle";

export const SCRecentTransfers = styled(SCAppWidget)`
  flex: 1 1 auto;
`;

export const SCRecentElem = styled.div`
  padding: 25px 35px;
  background-color: ${(props) => props.theme.colors.bgc};
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  .date {
    display: flex;
    align-items: center;
    column-gap: calc(0.8vw + 5.2px); //? 20 | 8

    p {
      text-align: right;
    }
  }

  .AppImage {
    height: calc(1vw + 30.3px); //? 50 | 34
    width: calc(1vw + 30.3px); //? 50 | 34
  }
`;

export const SCTransferBlock = styled(SCAppWidget)`
  flex: 0 1 40%;

  .inputWrapper {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  .transferPart {
    margin-bottom: 45px;
  }
`;

export const SCTransferElem = styled(SCAppWidget)`
  flex: 1 1 40%;

  p {
    margin-bottom: 20px;
  }

  .cardDetails {
    margin-top: 30px;
    display: flex;
    gap: 20px;

    .validityPeriod {
      flex: 1 1 45%;
    }

    .cardName {
      flex: 1 1 auto;
    }
  }
`;

export const SCEnrollment = styled(SCAppWidget)`
  flex: 1 1 20%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  p {
    /* margin-bottom: 20px; */
  }

  select {
    background-color: ${(props) => props.theme.colors.bgc};
  }
`;

export const SCServicePayments = styled(SCAppWidget)`
  position: relative;

  .nextSlideBtn {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: calc(1.6vw + 14.2px);
    translate: 0 -50%;
    z-index: 10;
    transition: 200ms;

    &:hover {
      filter: drop-shadow(0 0 10px ${(props) => props.theme.colors.primeColor});
      scale: 1.1;
    }

    &:active {
      scale: 0.9;
    }
  }
`;

export const SlidesWrapper = styled.div`
  cursor: grab;
  padding: 0 120px;
`;

export const SCServiceElem = styled.div`
  padding: 24px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 3px 30px 0px ${(props) => props.theme.colors.elemsShadowLight};
  text-align: center;
  color: ${(props) => props.theme.colors.primeColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
