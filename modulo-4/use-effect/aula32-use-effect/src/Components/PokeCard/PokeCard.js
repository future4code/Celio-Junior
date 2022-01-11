import React, { useEffect, useState } from "react";
import axios from "axios";

function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});

  const getPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPokemon(props.pokemon);
    
  }, [pokemon]);

  useEffect(() => {
  if(props.pokemon!== props.pokemon){
    getPokemon()
  }
  }, [pokemon]);

  return (
    <div className="Pokemon">
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}

export default PokeCard;