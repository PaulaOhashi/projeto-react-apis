import styled from "styled-components";
import img from "../../assets/img.png"
import Inter from "../../assets/Inter-Bold.ttf"
import { Link } from "react-router-dom";

export const ContainerCard = styled.div`
    display:flex;
    flex-direction:row;
    max-width:100%;
    min-height:30%;
    border:1px solid black;
    border-radius:12px;
    justify-content:space-around;
    z-index:1;
    background-color:${(props =>props.color)};
    margin-top:2em;
`

export const Image = styled.img`
    max-width: 84%;
    min-height: 193px;
    z-index:2;
    margin-top:-4rem;
    margin-bottom:2rem;
`

export const RightSide = styled.div`
    display:flex;
    flex-direction:column;
    background-image:url(${img});
    background-size:210px 210px;    
    background-repeat:no-repeat; 
    align-items:center;
    max-width:50%;
`

export const PokeType=styled.div`
    display:flex;
    flex-direction:row;
    gap:1rem;
`

export const Button=styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 10vw;
    min-height: 38px;
    background: #FFFFFF;
    border-radius: 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    z-index:2;
    cursor: pointer;
    &:hover{
        -moz-transform: scale(1.1);
	    -webkit-transform: scale(1.1);
	    transform: scale(1.1);
    }
`

export const LeftSide=styled.div`
    width:50%;
    padding:1.5rem;
    display:flex;
    flex-direction:column;
    gap:0.5rem;
    @font-face {
      font-family:"Inter";
      src: local("Inter"),url(${Inter}) format("Inter");
    }
`

export const PokeId=styled.div`
    size:1rem;
    color:#FFFFFF;
`

export const PokeName=styled.div`
    text-transform:capitalize;
    margin-top:5px;
    width: 159px;   
    height: 39px;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color:#FFFFFF;
`

export const Type1=styled.div`
    border:1px solid black;
    width: 99px;
    height: 31px;
    border-radius:8px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:${(props =>props.color)};
    border: 1px dashed rgba(255, 255, 255, 0.47);
    display:flex;
    flex-direction:row;
    gap:0.5rem;
    color:#FFFFFF;
`

export const Type2=styled.div`
    border:1px solid black;
    width: 99px;
    height: 31px;
    border-radius:8px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:${(props =>props.color)};
    border: 1px dashed rgba(255, 255, 255, 0.47);
    display:flex;
    flex-direction:row;
    gap:0.5rem;
    color:#FFFFFF;
`

export const LinkDetail = styled(Link)`
    padding-top:2rem;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #FFFFFF;
    cursor: pointer;
    &:hover{
        -moz-transform: scale(1.1);
	    -webkit-transform: scale(1.1);
	    transform: scale(1.1);
    }
`