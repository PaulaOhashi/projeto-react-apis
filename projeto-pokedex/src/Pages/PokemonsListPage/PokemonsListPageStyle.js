import styled from "styled-components";

export const PokemonsListPageContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#DDDDDD;
    padding:2%;
`

export const Pokemons=styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:1rem;
    max-width:100vw; 
    height:100%;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        grid-template-columns:1fr;
    }
    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
        grid-template-columns:1fr 1fr;
    }
`

export const Title=styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 2em;
    line-height: 2em;
    max-width:100%;
`