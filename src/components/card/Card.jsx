import React, { useEffect, useState } from "react";

import styles from "./Card.module.css";

const Card = ({ pokemon }) => {
  const [color, setColor] = useState("");
  useEffect(() => {
    switch (pokemon.types[0].type.name) {
      case "grass":
        setColor("green");
        break;
      case "fire":
        setColor("red");
        break;
      case "water":
        setColor("lightblue");
        break;
      case "electric":
        setColor("blue");
        break;
      case "normal":
        setColor("white");
        break;
      case "ghost":
        setColor("gray");
        break;
      default:
        break;
    }
  }, [pokemon]);
  return (
    <div style={{ backgroundColor: color }} className={styles.wrapper}>
      <div className={styles.img}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className={styles.info}>
        <h3>{pokemon.name}</h3>
        <span>#{pokemon.id}</span>
        <div className={styles.tags}>
          {pokemon.types.map((type, i) => (
            <span key={i} className={styles.tag}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
