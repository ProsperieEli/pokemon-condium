import React, { useEffect, useState } from "react";
import Controls from "../Components/Control/Control";
import PokemonList from "../Components/PokemonList/PokemonList";
import {
  fetchFilteredPokemon,
  fetchPokemon,
  fetchSearchPokemon,
  fetchTypes,
} from "../Service/Service";

export default function Conpendium() {
  const [pokemons, setPokemons] = useState([]);
  const [name, setName] = useState("");
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  //useEffect here
  useEffect(() => {
    const getMainPokemon = async () => {
      const favoritepokemon = await fetchPokemon();
      setPokemons(favoritepokemon);
    };
    getMainPokemon();
  }, []);

  useEffect(() => {
    const getTypes = async () => {
      const favoriteTypes = await fetchTypes();
      setTypes(favoriteTypes);
    };
    getTypes();
  }, []);

  useEffect(() => {
    const getFilteredPokemon = async () => {
      if (selectedType === "all") {
        const favoritepokemon = await fetchPokemon();
        setPokemons(favoritepokemon);
      } else {
        const filteredPokemon = await fetchFilteredPokemon(selectedType);
        setPokemons(filteredPokemon);
      }
    };
    getFilteredPokemon();
  }, [selectedType]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchPokemon = await fetchSearchPokemon(name);
    setPokemons(searchPokemon);
  };

  return (
    <div className="App">
      <Controls
        name={name}
        types={types}
        selectedType={selectedType}
        handleSubmit={handleSubmit}
        handleNameChange={setName}
        filterChange={setSelectedType}
      />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}
