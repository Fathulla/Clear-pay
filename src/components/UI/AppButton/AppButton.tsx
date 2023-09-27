import React from "react";
import { Button } from "./AppButton.style";

export interface IButtonProps {
  buttonLabel: string;
  isDisabled: boolean;
}

export const AppButton = ({
  buttonLabel,
  isDisabled,
  ...props
}: IButtonProps) => {
  return (
    <Button className="AppButton" disabled={isDisabled} {...props}>
      {buttonLabel}
    </Button>
  );
};
