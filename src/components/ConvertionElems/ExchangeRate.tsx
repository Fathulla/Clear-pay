import { AppElem } from "../AppElem/AppElem";
import { AppLink } from "../UI/AppLink/AppLink";
import { SCExchangeTable, SCExchangeRate } from "./ConvertionElems.style";
import { exchangeRateData } from "./Conversation.data";
import { Table } from "../Table/Table";
import { Column } from "react-table";
import { useMemo } from "react";

interface IExchangeRateProps {}

interface ExchangeTableItem {
  name: string;
  fullName: string;
  img: string;
  centralBank: string;
  buy: string;
  sell: string;
}

export const ExchangeRate = ({}: IExchangeRateProps) => {
  const columns = useMemo<Column<ExchangeTableItem>[]>(() => {
    return [
      {
        Header: "Волюта",
        accessor: "fullName",
        Cell: ({ cell }) => (
          <AppElem
            elemName={cell.row.original.name}
            elemStatus={cell.row.original.fullName}
            elemImg={cell.row.original.img}
          />
        ),
      },
      {
        Header: "Курс ЦБ",
        accessor: "centralBank",
      },
      {
        Header: "Покупка",
        accessor: "buy",
      },
      {
        Header: "Продажа",
        accessor: "sell",
      },
    ];
  }, []);

  return (
    <SCExchangeRate>
      <h1>Курс валют</h1>
      <SCExchangeTable>
        <Table columns={columns} data={exchangeRateData} />
      </SCExchangeTable>
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
