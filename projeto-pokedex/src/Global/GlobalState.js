import { GlobalContext } from "./GlobalContext"
import axios from "axios"
import { useState,useEffect } from "react"
import { BASE_URL } from "../constants/url"

export const GlobalState = ({children}) => {
    const [pokemons,setPokemons] = useState([])
    const [pokedex,setPokedex] = useState([])
  
    const getPokemons = () => {
      axios
      .get(`${BASE_URL}/?limit=20`)
      .then((res)=>setPokemons(res.data.results))
      .catch((error) => console.log(error))
    }

    useEffect(()=> {
      getPokemons()
    },[])

    const filterPokemonList = pokemons?.filter(
      (pokemonInList) => !pokedex?.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
      )
    )
   
    const addToPokedex = (pokemonToAdd) => {
      const isAlreadyOnPokedex = pokedex.find((element)=>element.id === pokemonToAdd.id)
  
      if(!isAlreadyOnPokedex){
        const newPokedex = [...pokedex,pokemonToAdd]
        setPokedex(newPokedex)
      }
    } 

    const removeFromPokedex = (pokemonToRemove) =>{
      const newPokedex = pokedex.filter(
        (element) => element.id != pokemonToRemove)
      setPokedex(newPokedex)
    }
  
    const dados={
      pokemons,
      pokedex,
      addToPokedex,
      removeFromPokedex,
      filterPokemonList
    }

    return(
    <GlobalContext.Provider value={dados}>
        {children}
    </GlobalContext.Provider>
    )
}