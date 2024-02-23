import styles from './Pokemon.module.css'
function Pokemon(pokemon) {
    return(
        <div className={styles.pokemon}>
            <a href=""><img src={pokemon.image_url} alt={pokemon.name}></img></a>
            <span>{pokemon.name}</span>
        </div>
    )
}

export default Pokemon ;