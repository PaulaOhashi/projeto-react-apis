import styled from "styled-components";

export const ContainerDetail = styled.div`
    background-color: #DDDDDD;
    display:flex;
    flex-direction:column;
`

export const Title = styled.h1`
    color:white;
    padding-left:2.5rem;
    padding-top:3.8rem;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
`

export const Card = styled.div`
    background-color:${(props =>props.color)};
    width: 1389.14px;
    height: 663px;
    border-radius: 37.8857px;
    display:flex;
    flex-direction:row;
    gap:3rem;
    padding-left:2rem;
    align-items:center;
`

export const FrontImage = styled.img`
    width: 282px;
    height: 282px;
    background-color:white;
    border: 2px solid #FFFFFF;
    border-radius: 8px;
`

export const BackImage = styled.img`
    width: 282px;
    height: 282px;
    background-color:white;
    border: 2px solid #FFFFFF;
    border-radius: 8px;
`

export const Images = styled.div`
    display:flex;
    flex-direction:column;
    gap:4rem;
`

export const ContainerCard = styled.div`
    display:flex;
    justify-content:center;
    padding-top:3.8rem;
`

export const BaseStats = styled.div`
    width: 343px;
    height: 613px;
    background: #FFFFFF;
    border-radius: 12px;
    display:flex;
    flex-direction:column;
    gap:1rem;
    padding:1rem;
`

export const TitleBaseStats = styled.h1`
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
`

export const Stats = styled.div`
    display: flex;
    justify-content:space-around;
    gap:1rem;     
     
`

export const BarStats = styled.div`
    border-radius: 4px;
    height: 10px; 
    width:100%;
    div{
        border: 1px solid ${props => props.stats < 50 ? 'red' :props.stats < 99? 'orange':'#73AC31'};
        width: ${props => (props.stats/100)*100}%;
        background-color: ${props => props.stats < 50 ? '#FF7B2E' :props.stats < 99? '#FFC000':'#B5E61D'};
        border-radius: 8px;
        height: 100%;
    }
`

export const StatsName = styled.div`
    display:flex;
    text-align:right;
    width:25%;
`

export const StatsNumber=styled.div``

export const Name = styled.h1`
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    color: #FFFFFF;
`



export const Id = styled.div`
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    color: #FFFFFF;
`

export const BoxType1 = styled.div`
    width: 99px;
    height: 31px;
    border-radius:8px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:${(props =>props.color)};
    border: 1px dashed rgba(255, 255, 255, 0.47);
`

export const BoxType2 = styled.div`
    width: 99px;
    height: 31px;
    border-radius:8px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:${(props =>props.color)};
    border: 1px dashed rgba(255, 255, 255, 0.47);
`
export const Infos = styled.div`
    display:flex;
    flex-direction:row;
`
export const BoxTypes = styled.div`
    display:flex;
    flex-direction:row;
    gap:1rem;
    padding-bottom:1rem;
`

export const TitleMoves = styled.h1`
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;

`

export const LeftSide = styled.div``

export const RightSide = styled.div``

export const Image = styled.img`
    width: 270px;
    height: 270px;
`

export const Moves = styled.div`
    width: 100%;
    height: 453px;
    background: #FFFFFF;
    border-radius: 8px;
    display:flex;
    flex-direction:column;
    gap:1rem;
    padding:1rem;
`

export const MoveName = styled.div`
    background: #ECECEC;
    border: 1px dashed rgba(0, 0, 0, 0.14);
    border-radius: 12px;
`