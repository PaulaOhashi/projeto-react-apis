import React, { useEffect } from "react";
import { ContainerDetail,Title,Card,ContainerCard,Id,FrontImage,BackImage,BoxTypes,BoxType1,BoxType2,Images,BaseStats,Infos,Name,Moves,TitleMoves,LeftSide,RightSide,Image,MoveName,TitleBaseStats,Stats,StatsName,StatsNumber,BarStats } from "./PokemonDetailPageStyle";
import { Header } from "../../Components/Header/Header";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import { useState } from "react";
import { getColors,getType } from "../../utils/theme";


export const PokemonDetailPage = () => {
    const {id} = useParams()
    const [pokemonDetail,setPokemonDetail] = useState("")
    const [type1,setType1] = useState("")
    const [type2,setType2] = useState("")

    const getDetails = () => {
        axios
        .get(`${BASE_URL}/${id}`)
        .then((response)=>{
            setPokemonDetail(response.data)
            setType1(response.data.types[0]?.type.name)
            setType2(response.data.types[1]?.type.name) 
        })
        .catch((error)=>console.log(error))
    }

    useEffect(() =>{
        getDetails()
    },[])

    const cardColor = getColors(type1)
    const cardColorType1 = getType(type1)
    const cardColorType2 = getType(type2) 

    return(
        <div>
           <Header/>
            <ContainerDetail>
                <Title>Detalhes</Title>
                <ContainerCard> 
                <Card color={cardColor}>
                    <Images>
                    <FrontImage src={pokemonDetail.sprites?.front_default}/>
                    <BackImage src={pokemonDetail.sprites?.back_default}/>
                    </Images>
                    <BaseStats>
                        <TitleBaseStats>Base stats</TitleBaseStats>
                        {pokemonDetail?.stats?.map((status,index)=>{
                            return(
                            <Stats key={index}>
                                <StatsName >{status.stat.name.replace("hp","HP").replace("special-attack","Sp.Atk").replace("special-defense","Sp.Def ")}</StatsName>
                                <StatsNumber>{status.base_stat}</StatsNumber>
                                <BarStats stats={status.base_stat}><div></div></BarStats>
                            </Stats>)
                        })}
                    </BaseStats>
                    <Infos>
                        <LeftSide>
                        <Id>#{pokemonDetail.id}</Id>
                        <Name>{pokemonDetail.name}</Name>
                        <BoxTypes>
                        <BoxType1 color={cardColorType1}>{type1}</BoxType1>
                        {type2?
                        <BoxType2 color={cardColorType2}>{type2}</BoxType2>:false
                        }
                        </BoxTypes>
                        <Moves>
                            <TitleMoves>Moves:</TitleMoves>
                            {pokemonDetail.moves?.slice(0,4).map((move,index)=>(
                                <MoveName key={index}>{move.move.name}</MoveName>
                            ))
                            }
                        </Moves>
                        </LeftSide>
                        <RightSide>
                        <Image src={pokemonDetail.sprites?.other.home.front_default}/>
                        </RightSide>
                    </Infos>
                </Card>
                </ContainerCard>
           </ContainerDetail> 
           
        </div>
    )
}