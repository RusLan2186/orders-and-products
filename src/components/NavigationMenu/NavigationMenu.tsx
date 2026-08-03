import { NavLink } from 'react-router-dom';
import './NavigationMenu.scss';

export const NavigationMenu = () => {
  return (
    <nav className="nav-menu">
      <NavLink
        to="/orders"
        className={({ isActive }) => `nav-menu__link ${isActive ? 'nav-menu__link--active' : ''}`}
      >
        Приход
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => `nav-menu__link ${isActive ? 'nav-menu__link--active' : ''}`}
      >
        Продукты
      </NavLink>
    </nav>
  );
};