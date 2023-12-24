import { Container, PokedexList, Pokemon} from "./styles";

function Home () {
    const pokemons = [
        {
            id:1,
            name: 'Bulbassauro',
            image_url: "https://pbs.twimg.com/profile_images/1225497788491931648/B6k9ZlCp_400x400.jpg"
        },
        {
            id:2,
            name: 'Ivysar',
            image_url: "https://pbs.twimg.com/profile_images/1225497788491931648/B6k9ZlCp_400x400.jpg"
        },
        {
            id:3,
            name: 'Charmander',
            image_url: "https://pbs.twimg.com/profile_images/1225497788491931648/B6k9ZlCp_400x400.jpg"
        }
    ]
    return(
        <Container>
            <h1>Pokedex</h1>
            <PokedexList>
                {pokemons.map(pokemon => {
                    return(
                        <Pokemon key={pokemon.id}>
                            <a href=""><img src={pokemon.image_url} alt={pokemon.name}></img></a>
                            <span>{pokemon.name}</span>
                        </Pokemon>
                    )
                })}
            </PokedexList>
        </Container>
    )
}

export default Home;