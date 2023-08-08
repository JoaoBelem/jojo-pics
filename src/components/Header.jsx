import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav + ' container'}>
        <Link to="/">
          <h1 className={styles.logo}>JojoPics</h1>
        </Link>
        <Link to="/postar" className={styles.link}>Postar uma foto</Link>
      </nav>
    </header>
  );
};

export default Header;
