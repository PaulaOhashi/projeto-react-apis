import styled from "styled-components";

export const PokemonsListPageContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#DDDDDD;
    padding:2%;
    .menu-overlay-close{
        display: none;
        z-index:3;
    }

    .menu-overlay-open{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100vh;
        background-color: #000000;
        opacity: 0.8;
        z-index:2;
    }
`

export const Pokemons=styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:1rem;
    max-width:100vw; 
    height:100%;
    z-index:1;
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

export const ModalContainer = styled.div`
   
`