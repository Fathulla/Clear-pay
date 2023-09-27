import { AppIcon } from "../UI/AppIcon/AppIcon";
import { SCOperationBadge } from "./ProfileElems.style";

interface IOperationStatusBadgeProps {
  operationStatus: string;
}

export const OperationStatusBadge = ({
  operationStatus,
}: IOperationStatusBadgeProps) => {
  return (
    <SCOperationBadge
      className="OperationBadge"
      operationStatus={operationStatus}
    >
      <AppIcon width="16" className="operationIcon" name={operationStatus} />
      <span className="operationStatusName">
        {operationStatus === "done"
          ? "Выполнен"
          : operationStatus === "in-process"
          ? "В процессе"
          : operationStatus === "cancel"
          ? "Отмена"
          : "Недоступно :("}
      </span>
    </SCOperationBadge>
  );
};
