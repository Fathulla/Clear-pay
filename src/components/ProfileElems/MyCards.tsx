import React from "react";
import { SCMyCards } from "./ProfileElems.style";
import { AppButton } from "../UI/AppButton/AppButton";
import { Card } from "./Card";

interface IMyCardsProps {}

export const MyCards = ({}: IMyCardsProps) => {
  return (
    <SCMyCards>
      <h5>Мои карты</h5>
      <Card />
      <Card />
      <AppButton buttonLabel="Добавить карту" isDisabled={false}/>
    </SCMyCards>
  );
};
