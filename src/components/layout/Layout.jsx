import React from "react";

import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Pokedex</h1>
      </header>
      {children}
    </div>
  );
};

export default Layout;
