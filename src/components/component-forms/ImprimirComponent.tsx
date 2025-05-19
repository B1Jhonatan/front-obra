import { useEffect, useState } from "react";

interface ParamImprimir {
  nombre: string;
}
function ImprimirComponent({ nombre }: ParamImprimir) {
  const [nombreLabel, setNombreLabel] = useState("");
  const [idLabel, setIdLabel] = useState("");
  useEffect(() => setNombreLabel(nombre));
  useEffect(() => {
    function toCamelCase(text: string): string {
      const words = text.toLowerCase().split(" ");
      return words
        .map((word, index) =>
          index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join("");
    }
    const id: string = toCamelCase(nombreLabel);
    setIdLabel(id);
  });
  return (
    <div className="tex-alinear">
      <label htmlFor="">{nombreLabel}:</label>
      <label htmlFor="" id={idLabel}>
        {idLabel}
      </label>
    </div>
  );
}
export default ImprimirComponent;
