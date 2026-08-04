import "./AsideMenu.scss";
import avatar from "../../assets/avatar.png";
import { NavigationMenu } from "../NavigationMenu/NavigationMenu";

export const AsideMenu = () => {
  return (
    <aside className="aside-menu">
      <div className="aside-menu__avatar">
        <img src={avatar} alt="Logo" className="aside-menu__avatar-icon" />
      </div>
      <NavigationMenu />
    </aside>
  );
};
