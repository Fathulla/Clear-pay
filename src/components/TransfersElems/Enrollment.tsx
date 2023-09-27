import { calculatorData } from "../ConvertionElems/Conversation.data";
import { AppButton } from "../UI/AppButton/AppButton";
import { AppInput } from "../UI/AppInput/AppInput";
import { AppSelect } from "../UI/AppSelect/AppSelect";
import { SCEnrollment } from "./TransfersElems.style";

interface IEnrollmentProps {}

export const Enrollment = ({}: IEnrollmentProps) => {
  return (
    <SCEnrollment>
      <p>Сумма зачисления</p>
      <AppInput />
      <p>Валюта зачисления</p>
      <AppSelect variants={calculatorData} />
      <AppButton isDisabled={false} buttonLabel="Перевести" />
    </SCEnrollment>
  );
};
