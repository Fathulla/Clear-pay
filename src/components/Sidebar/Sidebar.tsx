import { Link, useLocation } from "react-router-dom";
import { AppIcon } from "../UI/AppIcon/AppIcon";
import { SCSidebar } from "./Sidebar.style";
import { ISidebarDataItem } from "./Sidebar.data";

interface ISidebarProps {
  links: Array<ISidebarDataItem>;
}

export const Sidebar = ({ links }: ISidebarProps) => {
  const location = useLocation();

  return (
    <SCSidebar>
      <AppIcon
        className="logo"
        name="clear-pay-logo"
        width="232"
        height="45"
        fill="white"
      />
      <AppIcon
        className="logo logo_small"
        name="clear-pay-logo_small"
        width="36"
        height="36"
        fill="white"
      />
      <ul>
        {links.map((route) => (
          <li title={route.title} key={route.title}>
            <Link
              className={route.path === location.pathname ? "_active" : ""}
              to={route.path}
            >
              <AppIcon name={route.iconName} stroke="2" fill="white" />
              <p className="route">{route.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </SCSidebar>
  );
};
