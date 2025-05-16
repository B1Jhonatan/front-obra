import React, { useState, useEffect } from "react";

interface Elementos {
  id: number;
  nameElemento: string;
}

interface MaterialPSI {
  id: number;
  namePsi: string;
}

const Seleccionar: React.FC = () => {
  const [elementos, setElementos] = useState<Elementos[]>([]);
  const [materialPsi, setMaterialPsi] = useState<MaterialPSI[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/elementos/mortero-psi")
      .then((res) => res.json())
      .then((data) => {
        console.log("Materiales recibidos:", data);
        setMaterialPsi(data);
      })
      .catch((error) => console.error("Error al cargar PSI:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/elementos/todos-elementos")
      .then((res) => res.json())
      .then((data) => setElementos(data))
      .catch((error) => console.error("Error al cargar elementos:", error));
  }, []);

  return (
    <div className="iselect">
      <select>
        <option value="elemento">Elemento</option>
        {elementos.map((ele) => (
          <option value={ele.id} key={ele.id}>
            {ele.nameElemento}
          </option>
        ))}
      </select>
      <select>
        <option value="elemento">Selecciona PSI</option>
        {materialPsi.map((mat) => (
          <option value={mat.id} key={mat.id}>
            {mat.namePsi}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Seleccionar;
