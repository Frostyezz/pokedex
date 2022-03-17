import React from "react";

import styles from "./Search.module.css";

const Search = ({ pokemons, setPokemons }) => {
  const onChange = (query) => {
    if (query) {
      let sorted = [];
      for (let pokemon of pokemons) {
        if (pokemon.name.includes(query)) {
          sorted.push(pokemon);
          continue;
        } else if ((pokemon.id + "").indexOf(query) > -1) {
          sorted.push(pokemon);
          continue;
        } else
          for (let type of pokemon.types) {
            if (type.type.name.includes(query)) {
              sorted.push(pokemon);
              continue;
            }
          }
      }

      setPokemons(sorted);
    } else {
      setPokemons(pokemons);
    }
  };

  return (
    <div className={styles.search}>
      <input
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder="Search pokemons by name, type or number"
      />
    </div>
  );
};

export default Search;
