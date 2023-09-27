import React from "react";
import { SCTransfersHistory, SCTransfersTable } from "./ProfileElems.style";
import { transfersHistoryData } from "./ProfileElems.data";
import { AppLink } from "../UI/AppLink/AppLink";
import { OperationStatusBadge } from "./OperationStatusBadge";

interface ITransfersHistoryProps {}

export const TransfersHistory = ({}: ITransfersHistoryProps) => {
  return (
    <SCTransfersHistory>
      <h5>История проведенных операций</h5>
      <SCTransfersTable>
        <div className="line">
          <h5 className="cell">Операция</h5>
          <h5 className="cell">Дата</h5>
          <h5 className="cell">Сумма (UZS)</h5>
          <h5 className="cell">Статус</h5>
        </div>
        {transfersHistoryData.map((transfer) => (
          <div className="line" key={transfer.id}>
            <div className="cell operation">{transfer.operation}</div>
            <div className="cell date">{transfer.date}</div>
            <div className="cell amount">{transfer.amount}</div>
            <OperationStatusBadge operationStatus={transfer.status} />
          </div>
        ))}
        <AppLink linkLabel="Показать ещё" hasIcon align="right" />
      </SCTransfersTable>
    </SCTransfersHistory>
  );
};
