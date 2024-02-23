import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "./styles";

function Details() {
    const { id } = useParams();

    const [pokemon , setPokemon] = useState({})

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => {
            const { name, height, sprites, types, weight, abilities } = data;
            const typesNames = [];

            for(let i=0; i<types.length; i++) {
                typesNames.push(types[i].type.name);
            }
            const pokemon= {
                    id,
                    name,
                    height,
                    image: sprites.front_default,
                    type1: typesNames[0],
                    type2: typesNames[1],
                    weight,
                    abilities

            }
            setPokemon(pokemon);
        })
       
    }, [id]);
    return(
        <Container className="container">
            <div className="pokemonInfo">
                <img src={pokemon.image}></img>
                <div className="detalhes">
                    <h1>{pokemon.name}</h1>
                    <h3>{pokemon.type1}</h3>
                    <h3>{pokemon.type2}</h3>    
                    <Link to="/"><button>Voltar</button></Link>                    
                </div>
                
            </div>
        </Container>
    )
}


export default Details;