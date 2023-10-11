import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './Details.css'

const Description = () => {
    const { pokemonSelected }= useParams()
    const [pokemon, setPokemon] = useState(null);

    useEffect(()=>{
        const getPokemonDetail = async () => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSelected}`);
            const pokemonData = await res.json();
            setPokemon(pokemonData)
            console.log(pokemon)}
    getPokemonDetail()
    },[])

    if (!pokemon) {
        return
            <div> Esperando Respuesta de la aplicación ...</div>
    }

  return (
    <div className="card-pokemon">
        <h2>{pokemon.name}</h2>
        <div className="container-pokemon">
            <div className="pokemon-img">
            <img src={pokemon.sprites.other["official-artwork"].front_default} alt="" />
            </div>
            <div className="pokemon-details">
            <ul>
                <li>Hp: <span>{pokemon.stats[0].base_stat}</span></li>
                <li>Attack: <span>{pokemon.stats[1].base_stat}</span></li>
                <li>Defense: <span>{pokemon.stats[2].base_stat}</span></li>
                <li>Special attack: <span>{pokemon.stats[3].base_stat}</span></li>
                <li>Special defense: <span>{pokemon.stats[4].base_stat}</span></li>
                <li>Speed: <span>{pokemon.stats[5].base_stat}</span></li>
                <li>Type: <span>{pokemon.types[0].type.name}</span></li>
            </ul>
            </div>
        </div>
        
        
    </div>
  )
}

export default Description