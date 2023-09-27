import { Incomes } from "../components/ProfileElems/Incomes";
import { MyCards } from "../components/ProfileElems/MyCards";
import {
  SCUserInfoBlock,
  SCUserMonitoring,
} from "../components/ProfileElems/ProfileElems.style";
import { Statistics } from "../components/ProfileElems/Statistics";
import { TransfersHistory } from "../components/ProfileElems/TransfersHistory";
import { UserBio } from "../components/ProfileElems/UserBio";
import { PageElemsWrapper } from "../theme/globalStyle";

export const ProfilePage = () => {
  return (
    <>
      <h1>Личный кабинет</h1>
      <PageElemsWrapper>
        <SCUserInfoBlock>
          <UserBio />
          <MyCards />
        </SCUserInfoBlock>
        <SCUserMonitoring>
          <Statistics />
          <Incomes />
          <TransfersHistory />
        </SCUserMonitoring>
      </PageElemsWrapper>
    </>
  );
};
