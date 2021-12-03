import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Controls from "../Components/Control/Control";
import PokemonList from "../Components/PokemonList/PokemonList";

it("it should render the Pokemon", () => {
  const pokemons = [
    {
      abilityOne: "Thick-fat",
      abilityTwo: "Vine-Whip",
      generation: "-MEGA-",
      id: 4,
      name: "Venusaur-mega",
      pic: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003_f2.png",
      typeOne: "Grass",
      typeTwo: "Poison",
    },
  ];
  const { container } = render(<PokemonList pokemons={pokemons} />);

  expect(container).toMatchSnapshot();
});

it("it should render the name, type search", () => {
  const { container } = render(
    <Controls name="Pikachu" types={["electric"]} selectedType="electric" />
  );

  expect(container).toMatchSnapshot();
});
