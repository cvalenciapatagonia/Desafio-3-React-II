import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PokemonDetails.css';

const PokemonDetails = () => {
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [select, setSelect] = useState('');
    const [showDetails, setShowDetails] = useState(false);
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
        setShowDetails(true); // Mostrar detalles después de seleccionar un Pokémon
    };

    const detallesPokemon = () => {
        if (select) {
            navigate(`/pokemones/${select}`);
        }
    };

    const volverASeleccion = () => {
        setSelect(''); // Restablecer el valor de select
        setShowDetails(false); // Ocultar detalles al volver a la selección
    };

    return (
        <div className='container-pokemon-selector'>
            {showDetails ? (
                <div>
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
                    <button onClick={volverASeleccion}>
                        Intenta buscando otro Pokémon
                    </button>
                </div>
            ) : (
                <p>Selecciona un Pokémon para ver los detalles</p>
            )}
        </div>
    );
};

export default PokemonDetails;
