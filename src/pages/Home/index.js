import { Container, PokedexList, Pokemon} from "./styles";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home () {
    // https://pokeapi.co/api/v2/pokemon?limit=151&offset=0
    const [pokemons, setPokemons ] = useState([]);

    useEffect(() => {
        fetchPokemon();
    }, []);

    const fetchPokemon = () => {
        const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

        const pokemonsPromises = [];
        for(let i=1; i<152; i++) {
            pokemonsPromises.push(fetch(getPokemonUrl(i)).then(resonse => resonse.json()));
        }

        Promise.all(pokemonsPromises)
            .then(pokemons => {
                console.log(pokemons)
                setPokemons(pokemons);
            })
    }
    
    return(
        <Container>
            <h1>Pokedex</h1>
            <PokedexList>
                {pokemons.map(pokemon => {
                    return(
                        <Pokemon key={pokemon.id}>
                            <Link to={`/details/${pokemon.id}`}> <img src={pokemon.sprites.front_default} alt={pokemon.name}></img> </Link>
                            <span>{pokemon.name}</span>
                        </Pokemon>
                    )
                })}
            </PokedexList>
        </Container>
    )
}

export default Home;