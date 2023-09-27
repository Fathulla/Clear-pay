import { statisticsData } from "./ProfileElems.data";
import { SCCountElem, SCStatistics } from "./ProfileElems.style";

interface IStatisticsProps {}

export const Statistics = ({}: IStatisticsProps) => {
  return (
    <SCStatistics>
      <h5>Статистика за месяц</h5>
      <div className="countsWrapper">
        {statisticsData.map((data) => (
          <SCCountElem key={data.description}>
            <p className="count">{data.count}</p>
            <p className="countDescription">{data.description}</p>
          </SCCountElem>
        ))}
      </div>
    </SCStatistics>
  );
};
