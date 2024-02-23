import { styled } from 'styled-components'

export const Container = styled.div`
    h1 {
        margin: 3rem 0;
    }
        display: flex;
        align-items: center;
        justify-content: center;
    

    .pokemonInfo {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(136, 15, 15);
        width: 70%;
    }

    img {
        width: 400px;
    }   

    .detalhes {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    button {
        background-color: rgb(85, 9, 9);
        border:none;
        cursor: pointer;
        border-radius: 0.5rem;
        color: white;
        padding: 2rem 2 rem;
        margin-top: 1rem;
        font-size: 150%;
        transition: all 0.3s;
    }

    button:hover {
        background-color: rgb(66, 12, 12);
    } 
`