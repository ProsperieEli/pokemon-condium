//api calls here
import { pokeMunger } from "../Utils/Utils";

export const fetchPokemon = async () => {
  const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?`);
  const allPokemon = await res.json();
  const pokemonList = allPokemon.results.map((pokemon) => pokeMunger(pokemon));

  return pokemonList;
};

export const fetchSearchPokemon = (pokemonName) => {
  const lowerCaseName = pokemonName.toLowerCase();
  return fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${lowerCaseName}`
  )
    .then((data) => data.json())
    .then((pokemonData) => {
      const { results } = pokemonData;
      const pokemonResults = results.map((pokemon) => pokeMunger(pokemon));
      return pokemonResults;
    });
};

export const fetchTypes = async () => {
  const res = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex/types`
  );

  const pokemonTypes = await res.json();

  // get random types
  const randomTypes = pokemonTypes.map((pokemonType) => ({
    type: pokemonType.type,
  }));
  // .sort(() => 0.5 - Math.random())
  // .slice(0, 5);
  return randomTypes;
};

export const fetchFilteredPokemon = async (type) => {
  const res = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${type}`
  );
  const pokemonData = await res.json();
  const filteredPokemon = pokemonData.results.map((pokemon) =>
    pokeMunger(pokemon)
  );
  return filteredPokemon;
};
