import React, { useEffect, useState } from "react";
import {PokemonsListPageContainer,Pokemons,Title,ModalContainer} from "./PokemonsListPageStyle"
import { Header } from "../../Components/Header/Header"
import axios from "axios"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { getColors } from "../../utils/theme";
import { useContext } from "react";
import { GlobalContext } from "../../Global/GlobalContext";
import { Loader } from "../../Components/Loader/Loader";

export const PokemonsListPage = () => {
    const context = useContext(GlobalContext)
    const {filterPokemonList,loading,showModal}=context

    return(
        <div>
            <Header/>
             {loading ? (
                <Loader/>
            ):(
                <PokemonsListPageContainer>
                    <div className={showModal ? 'menu-overlay-open' : 'menu-overlay-close'}></div> 
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
            )} 
        </div>
    )
}