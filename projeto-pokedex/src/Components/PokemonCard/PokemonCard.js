import React, { useEffect, useState } from "react";
import { ContainerCard,Image,LeftSide,RightSide,Button,PokeId,PokeName,PokeType,LinkDetail,Type1,Type2 } from "./PokemonCardStyle";
import axios from "axios";
import { getColors,getImageType,getType } from "../../utils/theme";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../Global/GlobalContext";

export const PokemonCard = (props) => {
    const {url}=props
    const context = useContext(GlobalContext)
    const {removeFromPokedex,addToPokedex,pokedex}=context
    const location = useLocation();
    const [pokemonDetail,setPokemonDetail] = useState("")
    const [id1,setId1] = useState("")
    const [id2,setId2] = useState("")

    const getDetails = () => {
        axios
        .get(url)
        .then((response)=>{
            setPokemonDetail(response.data)
            setId1(response.data.types[0]?.type.name)
            setId2(response.data.types[1]?.type.name) 
        })
        .catch((error)=>console.log(error))
    }

    useEffect(() =>{
        getDetails()
    },[pokedex])  
 
    const cardColor = getColors(id1)
    const cardColorType1 = getType(id1)
    const cardColorType2 = getType(id2)   
   
return(
        <ContainerCard color={cardColor}>
         <LeftSide>
        <PokeId>#{pokemonDetail.id}</PokeId>
        <PokeName>{pokemonDetail.name}</PokeName>
        <PokeType>
        <Type1 color={cardColorType1.color}>
            <img src={cardColorType1.img}/> 
            <div>{id1}</div>    
        </Type1>
        {id2?
        <Type2 color={cardColorType2.color}>
           <img src={cardColorType2.img}/> 
           <div>{id2}</div>
        </Type2>:false
        }       
        </PokeType> 
        <LinkDetail to={`/details/${pokemonDetail.id}`}>Detalhes</LinkDetail>
        </LeftSide>
        <RightSide>
        <Image src={pokemonDetail.sprites?.other.home.front_default}/>
        {location.pathname === "/"?(
            <Button onClick={()=>addToPokedex(pokemonDetail)}>Capturar!</Button>
        ):(
            <Button onClick={()=>removeFromPokedex(pokemonDetail.id)}>Remover!</Button>
        )
        } 
       </RightSide>   
    </ContainerCard>
    )
}