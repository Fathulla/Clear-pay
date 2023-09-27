import { AppElem } from "../AppElem/AppElem";
import { AppLink } from "../UI/AppLink/AppLink";
import { SCExchangeTable, SCExchangeRate } from "./ConvertionElems.style";
import { exchangeRateData } from "./Conversation.data";

interface IExchangeRateProps {}

export const ExchangeRate = ({}: IExchangeRateProps) => {
  return (
    <SCExchangeRate>
      <h1>Курс валют</h1>
      <SCExchangeTable>
        <div className="line">
          <h5>Валюта</h5>
          <h5 className="cell">Курс ЦБ</h5>
          <h5 className="cell">Покупка</h5>
          <h5 className="cell">Продажа</h5>
        </div>
        {exchangeRateData.map((cur) => (
          <div className="line" key={cur.name}>
            <div className="currency">
              <AppElem
                elemName={cur.name}
                elemStatus={cur.fullName}
                elemImg={cur.img}
              />
            </div>
            <div className="cell centralBank">{cur.centralBank}</div>
            <div className="cell buy">{cur.buy}</div>
            <div className="cell sell">{cur.sell}</div>
          </div>
        ))}
        <AppLink linkLabel="Показать другие валюты" hasIcon />
      </SCExchangeTable>
    </SCExchangeRate>
  );
};
