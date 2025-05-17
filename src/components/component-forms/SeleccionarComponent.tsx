import React, { useState, useEffect } from "react";
import "./SeleccionarComponent.css";

interface Lista {
  id: number;
  name: string;
}

interface Direccion {
  direccion: string;
}

const Seleccionar: React.FC<Direccion> = ({ direccion }: Direccion) => {
  const [lista, setLista] = useState<Lista[]>([]);
  const [links, setLinks] = useState<string>("");
  const nombreSelect: string =
    direccion.charAt(0).toLocaleUpperCase() + direccion.slice(1);

  useEffect(() => {
    if (direccion === "elementos") {
      setLinks("http://localhost:8080/elementos/todos-elementos");
    } else if (direccion === "psi") {
      setLinks("http://localhost:8080/elementos/concreto-psi");
    }
  }, [direccion]);

  useEffect(() => {
    if (!links) return; // Solo ejecuta cuando links tenga valor
    fetch(links)
      .then((res) => res.json())
      .then((data) => setLista(data))
      .catch((error) => console.error("Error al cargar: ", error));
  }, [links]); // Este efecto se ejecuta cada vez que 'links' cambie

  return (
    <div className="iselect">
      <label htmlFor="">{nombreSelect}:</label>
      <select>
        <option value="elemento">--seleccionar--</option>
        {lista.map((list) => (
          <option value={list.id} key={list.id}>
            {list.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Seleccionar;
