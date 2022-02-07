import './App.css';
import React, {useState, useEffect} from 'react';
import axios from "axios";
import PokeCard from "./Components/PokeCard/PokeCard";

function App() {
const [ pokeList, setPokeList ] = useState( [] );
const [ pokeName, setPokeName ] = useState( "" );

const getApiPokemon = async() => {

  await axios.get( "https://pokeapi.co/api/v2/pokemon/?limit=151" )
  .then(({ data }) => {
    setPokeList( data.results )
  });
};

useEffect(() => {
  getApiPokemon();
}, []);

const changePokeName = ( event ) => {
setPokeName( event.target.value );
};

  return (
    <div className="App">
       
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
  
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
  );
}

export default App;