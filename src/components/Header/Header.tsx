import { appLanguages } from "../../utils/appLanguages";
import { AppImage } from "../UI/AppImage/AppImage";
import { AppInput } from "../UI/AppInput/AppInput";
import { AppSelect } from "../UI/AppSelect/AppSelect";
import { AppElem } from "../AppElem/AppElem";
import { AppSettings, SCHeader } from "./Header.style";
import { colors } from "../../theme/colors";
import { AppIcon } from "../UI/AppIcon/AppIcon";

export const Header = () => {
  return (
    <SCHeader>
      {/* <AppIcon
        className="logo logo_small"
        name="clear-pay-logo_small"
        width="36"
        height="36"
        fill="white"
      /> */}
      <AppInput
        bgc="transparent"
        borderColor={colors.gray}
        placeholder="Поиск"
        hasError={false}
        iconName="search"
      />
      <AppSettings>
        <div className="languageSelect">
          <AppImage
            imgSrc="flags/ru-flag.png"
            imgAlt="RUS"
            height="22"
            width="22"
            borderRadius="50%"
          />
          <AppSelect variants={appLanguages} />
        </div>
        <AppElem elemImg="users/usachev.jpeg" elemName="Дмитрий Усачев" />
      </AppSettings>
    </SCHeader>
  );
};
