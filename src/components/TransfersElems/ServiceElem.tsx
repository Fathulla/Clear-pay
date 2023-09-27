import { colors } from "../../theme/colors";
import { AppIcon } from "../UI/AppIcon/AppIcon";
import { SCServiceElem } from "./TransfersElems.style";

interface IServiceElemProps {
  serviceTitle: string;
  serviceIcon: string;
}

export const ServiceElem = ({
  serviceTitle,
  serviceIcon,
}: IServiceElemProps) => {
  return (
    <SCServiceElem>
      <AppIcon
        name={serviceIcon}
        fill={colors.primeColor}
        height="42"
        width="42"
      />
      <p>{serviceTitle}</p>
    </SCServiceElem>
  );
};
