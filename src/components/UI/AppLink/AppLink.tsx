import { AppIcon } from "../AppIcon/AppIcon";
import { SCLink } from "./AppLink.style";

export interface IAppLinkProps {
  linkLabel: string;
  align?: "right" | "left";
  hasIcon?: boolean;
}

export const AppLink = ({ linkLabel, align, hasIcon }: IAppLinkProps) => {
  return (
    <SCLink className="AppLink _noSelect" $hasIcon={hasIcon} align={align}>
      <span className="linkLabel">{linkLabel}</span>
      {hasIcon && (
        <AppIcon className="linkIcon" name="arrow" width="12" height="10" />
      )}
    </SCLink>
  );
};
