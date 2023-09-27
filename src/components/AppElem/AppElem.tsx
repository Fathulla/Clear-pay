import { AppImage } from "../UI/AppImage/AppImage";
import { SCAppElem } from "./AppElem.style";

interface IUserElemProps {
  elemImg?: string;
  elemName: string;
  elemStatus?: string;
}

//? размер изображения .AppImage меняется в стилях родителя

export const AppElem = ({ elemImg, elemName, elemStatus }: IUserElemProps) => {
  const elemInitials = elemName[0];

  return (
    <SCAppElem className="AppElem">
      <AppImage
        imgSrc={elemImg}
        userInitials={elemInitials}
        imgAlt="user"
        borderRadius="50%"
      />
      <div className="elemDescription">
        <p className="mainText">{elemName}</p>
        {elemStatus && <p className="secondaryText">{elemStatus}</p>}
      </div>
    </SCAppElem>
  );
};
