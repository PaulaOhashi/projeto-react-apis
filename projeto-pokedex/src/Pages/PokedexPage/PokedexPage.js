import React from "react";
import { Header } from "../../Components/Header/Header";
import { ContainerPokedex } from "./PokedexPageStyle";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { useContext } from "react";
import { GlobalContext } from "../../Global/GlobalContext";
import { BASE_URL } from "../../constants/url";

export const PokedexPage = () => {
    const context = useContext(GlobalContext)
    const{pokedex} = context
 
    return(
        <div>
            <Header/>
            <ContainerPokedex>
                  {pokedex.map((pokemon,index)=>{
                    return(
                <PokemonCard
                    key={index}
                    url={`${BASE_URL}/${pokemon.id}/`} 
                />)
                  })}  
            </ContainerPokedex>    
        </div>        
      
    )
}