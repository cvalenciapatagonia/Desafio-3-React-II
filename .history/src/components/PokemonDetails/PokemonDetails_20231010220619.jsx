import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './PokemonList.css'

const PokemonDetails = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [select, setSelect] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const getPokemon = async (qty = 151) => {
            const url = "https://pokeapi.co/api/v2/pokemon";
            const res = await fetch(`${url}?limit=${qty}&offset=0`);
            const initialData = await res.json();
            setPokemonList(initialData.results)
    }
    getPokemon()
    },[])
    
    const selectPokemon = (e) =>{
        setSelect(e.target.value)
    }
    const detallesPokemon = () =>{
        navigate(`/pokemon/${select}`)
    }
  return (

    <div className='container-pokemon-selector' >
        <select value={select} onChange={selectPokemon}>
            <option value=""> Selecciona el pokemon </option>
            {pokemonList.map((pokemon) =>  (
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