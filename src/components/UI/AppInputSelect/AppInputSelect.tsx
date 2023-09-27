import { AppInput } from "../AppInput/AppInput";
import { AppSelect } from "../AppSelect/AppSelect";
import { SCInputSelect } from "./AppInputSelect.style";

interface IAppInputSelectProps {
  variants: any[];
}

export const AppInputSelect = ({ variants }: IAppInputSelectProps) => {
  return (
    <SCInputSelect>
      <AppInput />
      <div className="divider"></div>
      <AppSelect variants={variants} />
    </SCInputSelect>
  );
};
