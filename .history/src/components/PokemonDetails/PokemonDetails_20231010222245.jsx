import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './PokemonDetails.css'

const PokemonDetails = () => {
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [select, setSelect] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const getPokemon = async (qty = 151) => {
            const url = "https://pokeapi.co/api/v2/pokemon";
            const res = await fetch(`${url}?limit=${qty}&offset=0`);
            const initialData = await res.json();
            setPokemonDetails(initialData.results)
    }
    getPokemon()
    },[])
    
    const selectPokemon = (e) =>{
        setSelect(e.target.value)
    }
    const detallesPokemon = () =>{
        navigate(`/pokemones/${select}`)
    }
  return (

    <div className='container-pokemon-selector' >
        <select value={select} onChange={selectPokemon}>
            <option value=""> Selecciona el pokemon </option>
            {pokemonDetails.map((pokemon) =>  (
                <option key={pokemon.name} value={pokemon.name}>
                    {pokemon.name}
                </option>
            )) }
        </select>
        <button onClick={detallesPokemon} disabled={!select}>Ver detalles</button>
    </div>
  )
}


export default PokemonDetails