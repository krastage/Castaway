import styles from './Footer.module.css';
import { Link, NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div>
        <NavLink to={'/home'}>
          <img src="/img/main-logo.svg" alt="Main logo" />
        </NavLink>
        <ul className={styles.socialLinks}>
          <li>
            <img src="/img/social/inst.svg" alt="Instagram" />
          </li>
          <li>
            <img src="/img/social/twitter.svg" alt="Twitter" />
          </li>
          <li>
            <img src="/img/social/facebook.svg" alt="Facebook" />
          </li>
        </ul>
      </div>
      <div>
        <ul className={styles.menuList}>
          <li>
            <Link to={'/home'}>Home</Link>
          </li>
          <li>
            <Link to={'/episodes'}>Episodes</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className={styles.creditsList}>
          <li>
            <a href="">Style Guide</a>
          </li>
          <li>
            <a href="">Instructions</a>
          </li>
          <li>
            <a href="">Changelog</a>
          </li>
          <li>
            <a href="">Credit</a>
          </li>
          <li>
            <a href="">Powered by Webflow</a>
          </li>
          <li>
            <a href="">Licenses</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className={styles.streamingList}>
          <li>
            <a href=""><img src="/img/links-elements/icon1.svg" alt="music1" /></a>
          </li>
          <li>
            <a href=""><img src="/img/links-elements/icon2.svg" alt="music2" /></a>
          </li>
          <li>
            <a href=""><img src="/img/links-elements/icon3.svg" alt="music3" /></a>
          </li>
          <li>
            <a href=""><img src="/img/links-elements/icon4.svg" alt="music4" /></a>
          </li>
          <li>
            <a href=""><img src="/img/links-elements/icon5.svg" alt="music5" /></a>
          </li>
        </ul>
      </div>

    </footer>
  );
};