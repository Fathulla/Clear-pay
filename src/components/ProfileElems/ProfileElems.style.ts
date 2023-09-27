import styled from "styled-components";
import { SCAppWidget } from "../../theme/globalStyle";

export const SCUserInfoBlock = styled.div`
  flex: 0 1 auto;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SCUserMonitoring = styled.div`
  flex: 1 1 auto;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SCUserBio = styled(SCAppWidget)`
  .AppElem {
    margin-bottom: 45px;

    .mainText {
      font-size: calc(0.4vw + 16.6px);
    }

    .AppImage {
      height: calc(1.2vw + 103.8px); //? 126 | 108
      width: calc(1.2vw + 103.8px); //? 126 | 108
    }
  }

  .userInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: 25px;
    }

    .info {
      flex: 1 1 40%;
    }

    .value {
      flex: 1 1 60%;
      text-align: left;
    }
  }
`;

export const SCStatistics = styled(SCAppWidget)`
  h5 {
    margin-bottom: 30px;
  }

  .countsWrapper {
    display: flex;
    flex-wrap: wrap;
    gap: calc(0.6vw + 17.7px);
  }
`;

export const SCCountElem = styled.div`
  flex: 1 1 25%;

  border-radius: 10px;
  padding: 22px;
  background-color: ${(props) => props.theme.colors.bgc};
  text-align: center;

  .count {
    color: ${(props) => props.theme.colors.primeColor};
    font-size: calc(0.5vw + 30.2px); //? 40 | 32
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

export const SCIncomes = styled(SCAppWidget)`
  h5 {
    margin-bottom: 30px;
  }

  .coolChart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    padding: 20px;
    border: 2px solid ${(props) => props.theme.colors.primeColor};
    border-radius: 10px;
    text-align: center;
    position: relative;
    z-index: 5;

    &::after {
      content: "Очень крутой график";
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;

      font-size: calc(2.3vw + 27.7px); //? 72 | 36
      font-weight: 900;
      color: ${(props) => props.theme.colors.lightGray};

      opacity: 0.5;
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    p {
      font-size: 32px;
      font-weight: 600;
      text-transform: uppercase;

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
`;

export const SCMyCards = styled(SCAppWidget)`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .AppButton {
    border-radius: 16px;
  }
`;

export const SCCard = styled.div`
  border-radius: 16px;
  padding: 20px;
  background: linear-gradient(58deg, #02cafd 2.15%, #83f8a6 97.85%);
  color: white;

  display: flex;
  flex-direction: column;
  gap: 10px;

  &:nth-child(odd) {
    background: linear-gradient(90deg, #885df5 -0.01%, #5c6bdb 99.41%);
  }

  .cardType {
    font-size: 12px;
  }

  .money {
    font-size: 24px;
    font-weight: 600;
  }

  .cardPriority {
    font-size: 12px;
    background-color: ${(props) => props.theme.colors.primeColor};
    border-radius: 20px;
    padding: 5px;
    color: white;
    width: fit-content;
  }

  .cardData {
    display: flex;
    justify-content: space-between;

    .definition {
      font-size: 12px;
      margin-bottom: 5px;
    }

    .cardOwner {
      font-size: 14px;
    }
  }
`;

export const SCTransfersHistory = styled(SCAppWidget)`
  h5 {
    margin-bottom: 30px;
  }
`;

export const SCTransfersTable = styled.div`
  h5 {
    margin: 0;
  }

  .line {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
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
  }

  .AppLink {
    margin-top: 30px;
  }
`;

export const SCOperationBadge = styled.div<{ operationStatus: string }>`
  border-radius: 50px;
  padding: 5px 10px;
  color: white;
  background-color: #000;

  background-color: ${(props) =>
    props.operationStatus === "done"
      ? props.theme.colors.green
      : props.operationStatus === "in-process"
      ? props.theme.colors.primeColor
      : props.operationStatus === "cancel"
      ? props.theme.colors.red
      : "black"};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  .operationIcon {
    fill: white;
  }
`;
