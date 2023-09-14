import { NavLink, useLocation } from 'react-router-dom';
import styles from './Menu.module.css';

export const Menu = () => {
  const location = useLocation();
  const titleMappings = {
    '/home': 'Home',
    '/episodes': 'Episodes',
    '/about': 'About',
    '/contact': 'Contact',
  };

  document.title = titleMappings[location.pathname] || 'Error';

  return (
    <header className={styles.mainHeader}>
      <div className={styles.mainHeader__container}>
        <NavLink to={'/home'}>
          <img src="/img/main-logo.svg" alt="Main logo" />
        </NavLink>
        <nav>
          <ul className={styles.mainHeader__list}>
            <li>
              <NavLink
                to={'/home'}
                className={
                  location.pathname === '/home'
                    ? styles.mainHeader__activeLink
                    : styles.mainHeader__link
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/episodes'}
                className={
                  location.pathname === '/episodes'
                    ? styles.mainHeader__activeLink
                    : styles.mainHeader__link
                }>
                Episodes
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/about'}
                className={
                  location.pathname === '/about'
                    ? styles.mainHeader__activeLink
                    : styles.mainHeader__link
                }>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/contact'}
                className={
                  location.pathname === '/contact'
                    ? styles.mainHeader__activeLink
                    : styles.mainHeader__link
                }>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
