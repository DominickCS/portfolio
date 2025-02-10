import React from 'react';
import styles from './header.module.css';

function Header(props)  {
  return (
    <>
      <div className={styles.intro}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.pfpdiv}>
        <img className={styles.pfpimg} src="https://avatars.githubusercontent.com/u/67260863?v=4" />
      </div>
      <h4 className={styles.subtitle}>{props.subtitle}</h4>
      </div>
    </>);
}

export default Header;
