import { BrowserRouter,Routes,Route } from "react-router-dom"
import { PokemonsListPage } from "../Pages/PokemonsListPage/PokemonsListPage"
import { PokedexPage } from "../Pages/PokedexPage/PokedexPage"
import { PokemonDetailPage } from "../Pages/PokemonDetailPage/PokemonDetailPage"
import { Header } from "../Components/Header/Header"

export const Router = () => {

    return(
        <BrowserRouter>
        <Routes>    
            <Route path="/" element={<PokemonsListPage/>}/>
         
            <Route path="pokedex" element={<PokedexPage/>}/>
            
            <Route path="details/:id" element={<PokemonDetailPage/>}/>

        </Routes>
        </BrowserRouter>
    )
}