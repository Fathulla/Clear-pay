import { SCIncomes } from "./ProfileElems.style";

type Props = {};

// TODO: Добавить компонент с графиком

export const Incomes = (props: Props) => {
  return (
    <SCIncomes>
      <h5>Доходы и расходы за месяц</h5>
      <div className="coolChart">
        <p>Тут могла быть ваша реклама...</p>
      </div>
    </SCIncomes>
  );
};
