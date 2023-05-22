import React, { useEffect, useState } from "react";
import { HeaderContainer,Image,Button,LinkHome,ButtonDetail } from "./HeaderStyle";
import logo from "../../assets/image 1.png"
import { useLocation, useNavigate } from "react-router-dom";
import { goToHome, goToPokedex } from "../../Router/coordinator";
import { useContext } from "react";
import { GlobalContext } from "../../Global/GlobalContext";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import axios from "axios";

export const Header = () => {
    const navigate = useNavigate()   
    const location = useLocation() 
    const context = useContext(GlobalContext)
    const {removeFromPokedex,pokedex,addToPokedex,pokemons}=context
    const {id} = useParams()
    const [inPokedex,setInPokedex]=useState()
    const [pokemonDetail,setPokemonDetail] = useState([])
   
    const searchPokedex = ()=>{ pokedex.map((ele)=>{
        if(ele.id==id){
              setInPokedex(true)
            }else{
              setInPokedex(false)
            }
      })
    } 

    useEffect(()=> {
        searchPokedex()
    },[pokedex]) 

    const getDetails = () => {
        axios
        .get(`${BASE_URL}/${id}`)
        .then((response)=>{
            setPokemonDetail(response.data)
        })
        .catch((error)=>console.log(error))
    }

    useEffect(() =>{
        getDetails()
    },[])
    
return(
        <>
            { location.pathname === "/"?
                <HeaderContainer>
                    <Image src={logo} alt="Imagem logo"/>
                    <Button onClick={()=>goToPokedex(navigate)}>Pokédex</Button>
                </HeaderContainer>
                :location.pathname === "/pokedex"?
                <HeaderContainer>
                    <LinkHome onClick={()=>goToHome(navigate)}>Todos Pokemons</LinkHome>
                    <Image src={logo} alt="Imagem logo"/>
                </HeaderContainer>
                : 
                <HeaderContainer>
                    <LinkHome onClick={()=>goToHome(navigate)}>Todos Pokemons</LinkHome>
                    <Image src={logo} alt="Imagem logo"/>
                    {inPokedex?<ButtonDetail onClick={()=>removeFromPokedex(id)}>Excluir da Pokedex</ButtonDetail>
                    :<ButtonDetail onClick={()=>addToPokedex(pokemonDetail)}>Capturar</ButtonDetail>} 
                    
                </HeaderContainer>
            }
        </>
    )
}