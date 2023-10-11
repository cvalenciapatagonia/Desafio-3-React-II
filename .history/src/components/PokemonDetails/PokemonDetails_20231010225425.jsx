import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PokemonDetails.css';

const PokemonDetails = () => {
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [select, setSelect] = useState('');
    const [selectedPokemon, setSelectedPokemon] = useState(null); // Store selected Pokemon details
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
        setSelectedPokemon(null); // Reset selected Pokemon details when a new one is selected
    };

    const detallesPokemon = async () => {
        if (select) {
            const url = `https://pokeapi.co/api/v2/pokemon/${select}`;
            const res = await fetch(url);
            const data = await res.json();
            setSelectedPokemon(data);
        }
    };

    const goBackToSelection = () => {
        setSelect('');
        setSelectedPokemon(null);
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
                Ver descripcion
            </button>

            {selectedPokemon && (
                <div className="pokemon-details">
                    <h2>{selectedPokemon.name}</h2>
                    {/* Add more details as needed */}
                </div>
            )}

            {selectedPokemon && (
                <button onClick={goBackToSelection}>
                    Vuelve a seleccionar otro pokemon
                </button>
            )}
        </div>
    );
};

export default PokemonDetails;
