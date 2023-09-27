import { Link } from "react-router-dom";
import { AppIcon } from "../UI/AppIcon/AppIcon";
import { footerData } from "./Footer.data";
import { SCFooter } from "./Footer.style";

export const Footer = () => {
  return (
    <SCFooter>
      <div className="supportService">
        <AppIcon
          className="logo logo_small"
          name="clear-pay-logo_small"
          width="36"
          height="36"
          fill="white"
        />
        <AppIcon
          className="logo"
          name="clear-pay-logo"
          width="232"
          height="45"
          fill="white"
        />
        <div className="phoneNumbers">
          <p className="linksHeading">Служба поддержки:</p>
          <p>+998 911 456 456</p>
          <p>+998 911 456 456</p>
        </div>
      </div>
      <div className="footerLinks">
        {footerData.map((data) => {
          return (
            <div className="footerLink" key={data.title}>
              <p className="linksHeading">{data.title}</p>
              {data.links.map((link) => (
                <Link to={link.path} className="links" key={link.title}>
                  {link.title}
                </Link>
              ))}
            </div>
          );
        })}
      </div>
    </SCFooter>
  );
};
