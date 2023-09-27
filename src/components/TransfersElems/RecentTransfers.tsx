import React from "react";
import {
  SCRecentElem,
  SCRecentTransfers,
} from "./TransfersElems.style";
import { AppElem } from "../AppElem/AppElem";
import { AppIcon } from "../UI/AppIcon/AppIcon";
import { colors } from "../../theme/colors";
import { AppLink } from "../UI/AppLink/AppLink";
import { transfersData } from "./Transfers.data";

interface IRecentTransfersProps {}

export const RecentTransfers = ({}: IRecentTransfersProps) => {
  return (
    <SCRecentTransfers>
      <h3>Последние переводы</h3>
      {transfersData.map((transfer) => (
        <SCRecentElem key={transfer.name}>
          <AppElem elemName={transfer.name} elemStatus={transfer.number} />
          <div className="date">
            <div className="descriptionElem">
              <p className="mainText">{transfer.day}</p>
              <p className="secondaryText">{transfer.time}</p>
            </div>
            <AppIcon name="transfers-modern" fill={colors.primeColor} />
          </div>
        </SCRecentElem>
      ))}

      <AppLink hasIcon linkLabel="Показать еще" />
    </SCRecentTransfers>
  );
};
