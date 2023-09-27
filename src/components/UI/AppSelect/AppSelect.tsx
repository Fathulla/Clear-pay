import { SCSelect } from "./AppSelect.style";

interface IAppSelectProps {
  variants: Array<any>;
}

export const AppSelect = ({ variants }: IAppSelectProps) => {
  return (
    <SCSelect name="appLanguage" id="appLanguage">
      {variants.map((variant) => (
        <option key={variant.value} value={variant.value}>
          {variant.title}
        </option>
      ))}
    </SCSelect>
  );
};
