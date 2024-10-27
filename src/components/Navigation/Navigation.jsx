import { NavLink } from 'react-router-dom';
import navCss from './Navigation.module.css';
import clsx from 'clsx';
import Logo from '../Logo/Logo';
import Container from '../Container/Container';

const buildLinkClass = ({ isActive }) => {
  return clsx(navCss.link, isActive && navCss.isActive);
};

const Navigation = () => {
  return (
    <Container className="navContainer">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <nav className={navCss.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/campers" className={buildLinkClass}>
          Catalog
        </NavLink>
      </nav>
    </Container>
  );
};

export default Navigation;
