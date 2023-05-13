import styled from "styled-components";


export const ContainerPokedex=styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    background-color:#DDDDDD;
    padding:2%;
    gap:1rem;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        grid-template-columns:1fr;
    }
    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
        grid-template-columns:1fr 1fr;
    }
`