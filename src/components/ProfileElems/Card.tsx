import React from "react";
import { SCCard } from "./ProfileElems.style";

interface ICardProps {}

export const Card = ({}: ICardProps) => {
  return (
    <SCCard>
      <p className="cardType">Корпоративная</p>
      <p className="money">1 235 000 UZS</p>
      <div className="cardPriority">Основная</div>
      <div className="cardData">
        <div>
          <p className="definition">Card Holder Name</p>
          <p className="cardOwner">Усачев Дмитрий</p>
        </div>
        <div>
          <p className="definition">Expiry Date</p>
          <p className="cardOwner">02/30</p>
        </div>
      </div>
    </SCCard>
  );
};
