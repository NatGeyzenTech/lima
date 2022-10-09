import { Link } from 'react-router-dom';
import styles from '../styles/NavLink.module.css';

const NavLink = ({ link, text }) => (
  <li className={styles.navItem}>
    <Link href={link}>{text}</Link>
  </li>
);

export default NavLink;