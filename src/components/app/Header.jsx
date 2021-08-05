import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <NavLink to="/">
        <img src="disney-character-central.JPG" />
        <h1>Disney Character Central</h1>
      </NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Link 1</NavLink>
      <NavLink to="/">Link 2</NavLink>
    </header>
  );
};

export default Header;
