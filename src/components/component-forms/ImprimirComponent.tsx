import { useEffect, useState } from "react";

interface ParamImprimir {
  nombre: string;
}
function ImprimirComponent({ nombre }: ParamImprimir) {
  const [nombreLabel, setNombreLabel] = useState("");
  const [idLabel, setIdLabel] = useState("");
  useEffect(() => setNombreLabel(nombre));
  useEffect(() => {
    const id = `check-${nombreLabel.toLowerCase().replace(/\s+/g, "-")}`;
    setIdLabel(id);
  });
  return (
    <div>
      <label htmlFor="">{nombreLabel}</label>
      <label htmlFor="" id={idLabel}></label>
    </div>
  );
}
export default ImprimirComponent;
