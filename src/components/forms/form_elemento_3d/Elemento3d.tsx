import ImprimirComponent from "../../component-forms/ImprimirComponent";
import BotonesComponent from "../../component-forms/BotonesComponent";

function Elemento3D() {
  return (
    <dialog className="boxElemento">
      <h1>Elemento</h1>
      <div className="elemento-guardar">
        <ImprimirComponent nombre="Elemento" />
        <ImprimirComponent nombre="PSI" />
        <ImprimirComponent nombre="Cantidad" />
        <ImprimirComponent nombre="Largo" />
        <ImprimirComponent nombre="Ancho" />
        <ImprimirComponent nombre="Alto" />
        <ImprimirComponent nombre="Area unidad" />
        <ImprimirComponent nombre="Area total" />
        <ImprimirComponent nombre="Cemento unidad" />
        <ImprimirComponent nombre="Cemento total" />
        <ImprimirComponent nombre="Arena unidad" />
        <ImprimirComponent nombre="Arena total" />
        <ImprimirComponent nombre="Grava unidad" />
        <ImprimirComponent nombre="Grava total" />
        <ImprimirComponent nombre="Agua unidad" />
        <ImprimirComponent nombre="Agua total" />
      </div>
      <div className="botones">
        <BotonesComponent nameText="MODIFICAR" />
        <BotonesComponent nameText="GUARDAR" />
      </div>
    </dialog>
  );
}

export default Elemento3D;
