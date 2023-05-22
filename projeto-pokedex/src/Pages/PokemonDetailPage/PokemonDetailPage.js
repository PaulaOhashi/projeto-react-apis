import React, { useEffect } from "react";
import { ContainerDetail,Title,Card,ContainerCard,Id,FrontImage,BackImage,BoxTypes,BoxType1,BoxType2,Images,BaseStats,Infos,Name,Moves,TitleMoves,LeftSide,RightSide,Image,MoveName,TitleBaseStats,Stats,StatsName,StatsNumber,BarStats,Total } from "./PokemonDetailPageStyle";
import { Header } from "../../Components/Header/Header";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import { useState } from "react";
import { getColors,getType } from "../../utils/theme";
import { Loader } from "../../Components/Loader/Loader";


export const PokemonDetailPage = () => {
    const {id} = useParams()
    const [pokemonDetail,setPokemonDetail] = useState("")
    const [type1,setType1] = useState("")
    const [type2,setType2] = useState("")
    const [loading,setLoading] = useState(false)
    const [stats,setStats] = useState([])

    console.log(id)

    const getDetails = () => {
        setLoading(true)
        axios
        .get(`${BASE_URL}/${id}`)
        .then((response)=>{
            setPokemonDetail(response.data)
            setType1(response.data.types[0]?.type.name)
            setType2(response.data.types[1]?.type.name) 
            setStats(response.data.stats)
            setLoading(false)
        })
        .catch((error)=>{
            setLoading(false)
            console.log(error)
        })
    }

    const totalStats = stats.reduce((acc, curr) => acc + curr.base_stat, 0)


    useEffect(() =>{
        getDetails()
    },[])

    const cardColor = getColors(type1)
    const cardColorType1 = getType(type1)
    const cardColorType2 = getType(type2) 
    
    return(
        <div>
           <Header/>
           {loading? (
                <Loader/>
           ) : (
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
                        <Total>Total: {totalStats}</Total>
                    </BaseStats>
                    <Infos>
                        <LeftSide>
                        <Id>#{pokemonDetail.id}</Id>
                        <Name>{pokemonDetail.name}</Name>
                        <BoxTypes>
                        <BoxType1 color={cardColorType1.color}>
                            <img src={cardColorType1.img}/> 
                            <div>{type1}</div>  
                        </BoxType1>
                        {type2?
                        <BoxType2 color={cardColorType2.color}>
                            <img src={cardColorType2.img}/> 
                            <div>{type2}</div>
                        </BoxType2>:false
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
           )}
            
           
        </div>
    )
}