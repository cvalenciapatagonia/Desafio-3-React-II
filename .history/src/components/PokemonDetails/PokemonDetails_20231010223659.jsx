import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PokemonDetails.css';

const PokemonDetails = () => {
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [select, setSelect] = useState('');
    const [showSearchButton, setShowSearchButton] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getPokemon = async (qty = 151) => {
            const url = "https://pokeapi.co/api/v2/pokemon";
            const res = await fetch(`${url}?limit=${qty}&offset=0`);
            const initialData = await res.json();
            setPokemonDetails(initialData.results);
        };
        getPokemon();
    }, []);

    const selectPokemon = (e) => {
        setSelect(e.target.value);
        setShowSearchButton(true); // Mostrar el botón después de seleccionar un Pokémon
    };

    const detallesPokemon = () => {
        if (select) {
            navigate(`/pokemones/${select}`);
        }
    };

    const buscarOtroPokemon = () => {
        setSelect(''); // Restablecer el valor de select
        setShowSearchButton(false); // Ocultar el botón después de restablecer la selección
    };

    return (
        <div className='container-pokemon-selector'>
            <select value={select} onChange={selectPokemon}>
                <option value="">Selecciona el Pokémon</option>
                {pokemonDetails.map((pokemon) => (
                    <option key={pokemon.name} value={pokemon.name}>
                        {pokemon.name}
                    </option>
                ))}
            </select>
            <button onClick={detallesPokemon} disabled={!select}>
                Ver detalles
            </button>
            {showSearchButton && (
                <button onClick={buscarOtroPokemon}>
                    Intenta buscando otro Pokémon
                </button>
            )}
        </div>
    );
};

export default PokemonDetails;
