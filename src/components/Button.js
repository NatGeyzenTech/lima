import { Link } from 'react-router-dom';
import styles from '../styles/Button.module.css';

const Button =({ link, btnType, clickFunc, text}) => {
  const button = <button type="button" className={styles[btnType]} onClick={clickFunc}>{text}</button>;
  return link ? <Link href={link}>{button}</Link> : button;
};

export default Button;