import React, { useState } from "react";
import CheckComponent from "./CheckComponent";
import "./ChecksComponent.css";

function ChecksComponent() {
  const [seleccionado, setSeleccionado] = useState<string | null>(null);

  const manejarCambio = (nombre: string) => {
    setSeleccionado((prev) => (prev === nombre ? null : nombre));
  };

  return (
    <div className="ichecks">
      <CheckComponent
        nombre="Concreto"
        checked={seleccionado === "Concreto"}
        onChange={manejarCambio}
      />
      <CheckComponent
        nombre="Mortero"
        checked={seleccionado === "Mortero"}
        onChange={manejarCambio}
      />
      <CheckComponent
        nombre="Otro"
        checked={seleccionado === "Otro"}
        onChange={manejarCambio}
      />
    </div>
  );
}

export default ChecksComponent;
