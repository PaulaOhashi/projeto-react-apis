import React, { useEffect, useState } from "react";
import {PokemonsListPageContainer,Pokemons,Title} from "./PokemonsListPageStyle"
import { Header } from "../../Components/Header/Header"
import axios from "axios"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { getColors } from "../../utils/theme";
import { useContext } from "react";
import { GlobalContext } from "../../Global/GlobalContext";

export const PokemonsListPage = () => {
    const context = useContext(GlobalContext)
    const {filterPokemonList}=context

    return(
        <div>
        <Header/>
        <PokemonsListPageContainer>
            <Title>TODOS OS POKEMONS</Title>
            <Pokemons>
             {filterPokemonList.map((pokemon,index) => (
                <PokemonCard 
                    key={index}
                    url={pokemon.url}
                />
            ))} 
            </Pokemons>
        </PokemonsListPageContainer>
        </div>
    )
  
}