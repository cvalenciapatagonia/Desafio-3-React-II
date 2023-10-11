import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PokemonDetails.css';

const PokemonDetails = () => {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [select, setSelect] = useState('');
  const [showTryAnotherButton, setShowTryAnotherButton] = useState(false); // Nuevo estado
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
    setShowTryAnotherButton(false); // Oculta el botón al seleccionar otro Pokémon
  };

  const detallesPokemon = () => {
    if (select) {
      navigate(`/pokemones/${select}`);
      setShowTryAnotherButton(true); // Muestra el botón después de seleccionar un Pokémon
    }
  };

  const handleTryAnother = () => {
    setSelect(''); // Borra la selección actual
    setShowTryAnotherButton(false); // Oculta el botón al volver a la página de selección
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

      {/* Muestra el botón "Intenta seleccionando otro Pokémon" si showTryAnotherButton es verdadero */}
      {showTryAnotherButton && (
        <button onClick={handleTryAnother}>Intenta seleccionando otro Pokémon</button>
      )}
    </div>
  );
};

export default PokemonDetails;
