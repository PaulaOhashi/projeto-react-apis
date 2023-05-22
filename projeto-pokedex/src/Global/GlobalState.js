import { GlobalContext } from "./GlobalContext"
import axios from "axios"
import { useState,useEffect } from "react"
import { BASE_URL } from "../constants/url"

export const GlobalState = () => {
    const [pokemons,setPokemons] = useState([])
    const [pokedex,setPokedex] = useState([])
    const [loading,setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [action, setAction] = useState("")
  
    const getPokemons = () => {
      setLoading(true)
      axios
      .get(`${BASE_URL}/?limit=20`)
      .then((res)=> {
        setLoading(false)
        setPokemons(res.data.results)
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
      })
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
      setShowModal(true)
      setAction("add")
      const isAlreadyOnPokedex = pokedex.find((element)=>element.id === pokemonToAdd.id)
  
      if(!isAlreadyOnPokedex){
        const newPokedex = [...pokedex,pokemonToAdd]
        setPokedex(newPokedex)
      }
    } 

    const removeFromPokedex = (pokemonToRemove) =>{
      setShowModal(true)
      setAction("remove")
      const newPokedex = pokedex.filter(
        (element) => element.id != pokemonToRemove)
      setPokedex(newPokedex)
    }
  
return{
      pokemons,
      pokedex,
      addToPokedex,
      removeFromPokedex,
      filterPokemonList,
      loading,
      showModal,
      setShowModal,
      action,
      setAction
    }
}