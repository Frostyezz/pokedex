import React from "react";

import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search pokemons by name, type or number"
      />
    </div>
  );
};

export default Search;
