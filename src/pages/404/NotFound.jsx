import React from "react";

import { Link } from "react-router-dom";

import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <span>This page is unavailable!</span>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default NotFound;
