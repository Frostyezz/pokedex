import { useState, useEffect } from "react";

import styles from "./Home.module.css";

import Card from "../../components/card/Card";
import Search from "../../components/search/Search";

import data from "../../data/data.json";

function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => setPokemons(data), []);

  return (
    <>
      <Search
        pokemons={pokemons}
        setPokemons={(pokemons) => setPokemons(pokemons)}
      />
      <section className={styles.cardsContainer}>
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} key={pokemon.id} />
        ))}
      </section>
    </>
  );
}

export default Home;
