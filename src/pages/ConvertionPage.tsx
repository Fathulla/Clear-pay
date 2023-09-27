import { ExchangeCalculator } from "../components/ConvertionElems/ExchangeCalculator";
import { ExchangeRate } from "../components/ConvertionElems/ExchangeRate";
import { TransfersHistory } from "../components/ProfileElems/TransfersHistory";
import { Enrollment } from "../components/TransfersElems/Enrollment";
import { TransferElem } from "../components/TransfersElems/TransferElem";
import { PageElemsWrapper } from "../theme/globalStyle";

export const ConvertionPage = () => {
  return (
    <>
      <PageElemsWrapper>
        <ExchangeRate />
        <ExchangeCalculator />
      </PageElemsWrapper>
      <h1>Купить или продать валюту</h1>
      <PageElemsWrapper>
        <TransferElem transferType="Счет списания" />
        <TransferElem transferType="Счет зачисления" />
        <Enrollment />
      </PageElemsWrapper>
    </>
  );
};
