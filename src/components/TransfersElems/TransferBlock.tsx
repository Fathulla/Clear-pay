import { AppButton } from "../UI/AppButton/AppButton";
import { AppInput } from "../UI/AppInput/AppInput";
import { AppLink } from "../UI/AppLink/AppLink";
import { SCTransferBlock } from "./TransfersElems.style";

interface ITransferBlockProps {}

export const TransferBlock = ({}: ITransferBlockProps) => {
  return (
    <SCTransferBlock>
      <div className="transferPart transferIn">
        <h3>Счет списания</h3>
        <AppInput
          isDisabled={false}
          hasError={false}
          placeholder="Номер карты"
          iconName="card"
        />
        <AppInput
          hasError={false}
          placeholder="Сумма перевода"
          iconName="cash"
        />
        <AppLink align="right" linkLabel="Выбрать по номеру телефона" />
      </div>
      <div className="transferPart transferOut">
        <h3>Счет зачисления</h3>
        <AppInput hasError={false} placeholder="Номер карты" iconName="card" />
        <AppLink align="right" linkLabel="Выбрать по номеру телефона" />
      </div>
      <AppButton buttonLabel="Перевести" isDisabled={false} />
    </SCTransferBlock>
  );
};
