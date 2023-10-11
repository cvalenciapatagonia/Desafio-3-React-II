//Codigo util para redireccionar una vez se selecciona algo en el input o en un select con distintas opciones, una vez listo, redirecciona a la ruta personajes por ejemplo, pero ademas con una barra que separa el personaje escogido de la ubicacion.

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// export default function Home() {
//   const [id, setId] = useState("");
//   const navigate = useNavigate();
//   const irAPersonajes = () => {
//     if (id > 10 || id < 1) {
//       alert("El ID debe estar entre 1 y 10");
//     } else {
//       navigate(`/personajes/${id}`);
//     }
//   };
//   return (
//     <div className="mt-5">
//       <h1>React Router II - Selecciona una opcion para redireccion</h1>
//       <input
//         type="number"
//         value={id}
//         onChange={({ target }) => setId(target.value)}
//       />
//       <button onClick={irAPersonajes}>buscar</button>
//     </div>
//   );
// }

import React from 'react'

export default function Home() {
  return (
    <div>
        <h1>
            Bienvenido Maestro Pokemón
        </h1>
        <img src="https://www.nme.com/wp-content/uploads/2016/12/POTY_Pikachu_3.jpg" alt="" />
        </div>
  )
}
