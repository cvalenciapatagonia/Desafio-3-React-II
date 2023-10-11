import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PokemonDetails.css';

const PokemonDetails = () => {
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [select, setSelect] = useState('');
    const [selectedPokemon, setSelectedPokemon] = useState(null);
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
    };

    const detallesPokemon = () => {
        if (select) {
            // Aquí puedes realizar una solicitud adicional para obtener más detalles del Pokémon seleccionado
            // Por simplicidad, vamos a mostrar solo el nombre del Pokémon seleccionado.
            setSelectedPokemon(select);
        }
    };

    const volverASeleccion = () => {
        setSelect('');
        setSelectedPokemon(null);
        navigate('/pokemones'); // Navega de regreso a la página de selección
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
                Ver descripción
            </button>

            {selectedPokemon && (
                <div className='selected-pokemon-card'>
                    <h2>{selectedPokemon}</h2>
                </div>
            )}

            {selectedPokemon && (
                <button onClick={volverASeleccion}>
                    Vuelve a seleccionar otro Pokémon
                </button>
            )}
        </div>
    );
};

export default PokemonDetails;
