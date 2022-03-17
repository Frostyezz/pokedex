import React, { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

import data from "../../data/data.json";

import styles from "./Pokemon.module.css";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState();

  const { id } = useParams();
  useEffect(() => {
    for (let _pokemon of data) {
      if (_pokemon.id === parseInt(id)) {
        setPokemon(_pokemon);
        return;
      }
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      {pokemon ? (
        <>
          <div className={styles.img}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
          <div className={styles.info}>
            <h1>{pokemon.name.toUpperCase()}</h1>
            <span>#{pokemon.id}</span>
            <div className={styles.tags}>
              {pokemon.types.map((type, i) => (
                <span key={i} className={styles.tag}>
                  {type.type.name}
                </span>
              ))}
            </div>
            <Link to="/">Back to all pokemons</Link>
          </div>
        </>
      ) : (
        <div className={styles.notFound}>
          <b>Pokemon not found</b>
          <Link to="/">Back to all pokemons</Link>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
