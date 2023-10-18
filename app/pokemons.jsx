import { Link } from "expo-router";
import StyledInput from "../components/input";
import {
  Box
} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

export default function pokemons() {
  // get pokemons from generation 1
  const { data, error } = useSWR(
    "https://pokeapi.co/api/v2/generation/1",
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const pokemons = data.pokemon_species;
  console.log(pokemons);

  return (
    <Box>
      <StyledInput />
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <Link to={`/pokemons/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </Box>
  );
}

const styles = StyleSheet.create({
  link: {
    alignSelf: "center",
    fontWeight: 600,
    lineHeight: 24,
    color: "#60A5FA",
  },
});
