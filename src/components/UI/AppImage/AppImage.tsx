import { SCImg } from "./AppImage.style";

interface IAppImageProps {
  imgSrc?: string | undefined;
  userInitials?: string | undefined;
  imgAlt?: string;
  className?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}

export const AppImage = ({
  imgSrc,
  imgAlt,
  className = "AppImage",
  userInitials,
  width,
  height,
  borderRadius,
}: IAppImageProps) => {
  return (
    <SCImg
      width={width}
      height={height}
      $borderRadius={borderRadius}
      className={className}
    >
      {imgSrc ? (
        <img className="userImage" src={`./img/${imgSrc}`} alt={imgAlt} />
      ) : (
        <div className="userImage">
          <span>{userInitials}</span>
        </div>
      )}
    </SCImg>
  );
};
