import React from "react";
import { SCTransferElem } from "./TransfersElems.style";
import { AppInput } from "../UI/AppInput/AppInput";

interface ITransferElemProps {
  transferType: string;
}

export const TransferElem = ({ transferType }: ITransferElemProps) => {
  return (
    <SCTransferElem>
      <h3>{transferType}</h3>
      <p>Номер карты</p>
      <AppInput placeholder="Номер карты" iconName="card" />
      <div className="cardDetails">
        <div className="validityPeriod">
          <p>Срок действия</p>
          <AppInput placeholder="ММ / ГГ" iconName="calendar" />
        </div>
        <div className="cardName">
          <p>Название карты</p>
          <AppInput placeholder="Название карты" iconName="edit" />
        </div>
      </div>
    </SCTransferElem>
  );
};
