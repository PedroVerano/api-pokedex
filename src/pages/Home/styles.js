import styled from 'styled-components';

export const Container = styled.div`
h1 {
    text-align: center;
    margin: 4rem 0;
}

li:hover {
    transform: scale(1.1);
}

`
export const PokedexList = styled.ul`
list-style: none;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
column-gap: 3rem;
row-gap: 4rem;
`

export const Pokemon = styled.li`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 2rem;
    transition: all 0.3s;

span{
    margin-bottom: 1rem;
}

img {
        width: 180px;
    }
`


//export default Container;
