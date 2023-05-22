import styled from "styled-components"

export const HeaderContainer = styled.header`
    max-width: 100vw;
    min-height: 20vh;
    background: #FFFFFF;
    display:grid;
    grid-template-columns:repeat(5,1fr);
    align-items:center;
    padding-right:2%;
 
`

export const Image = styled.img`
    grid-column-start: 3;
    grid-column-end: 4;
    width:20vw;
    height:20vh;
`

export const Button = styled.button`
    max-width: 100%;
    min-height: 65%;
    background: #33A4F5;
    border-radius: 8px;
    grid-column-start: 5;
    grid-column-end: 6;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color:#FFFFFF;
    cursor: pointer;
    &:hover{
        -moz-transform: scale(1.1);
	    -webkit-transform: scale(1.1);
	    transform: scale(1.1);
    }
`

export const ButtonDetail  = styled.button`
    width: 100%;
    height: 65%;
    background: #FF6262;
    border-radius: 8px;
    grid-column-start: 5;
    grid-column-end: 6;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color:#FFFFFF;
    cursor: pointer;
    &:hover{
        -moz-transform: scale(1.1);
	    -webkit-transform: scale(1.1);
	    transform: scale(1.1);
    }
`

export const LinkHome = styled.a`
    width: 20vw;
    height: 10vh;
    font-weight: 700;
    font-size: 1.5em;
    line-height: 2em;
    padding-left:2em;
    cursor: pointer;
    &:hover{
        -moz-transform: scale(1.1);
	    -webkit-transform: scale(1.1);
	    transform: scale(1.1);
    }
`

