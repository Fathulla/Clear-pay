import { ServicePayments } from "../components/TransfersElems/ServicePayments";
import { RecentTransfers } from "../components/TransfersElems/RecentTransfers";
import { TransferBlock } from "../components/TransfersElems/TransferBlock";
import { PageElemsWrapper } from "../theme/globalStyle";

export const TransfersPage = () => {
  return (
    <div className="TransfersPage">
      <h1>Переводы</h1>
      <PageElemsWrapper>
        <TransferBlock />
        <RecentTransfers />
      </PageElemsWrapper>
      <ServicePayments />
    </div>
  );
};
