import Seleccionar from "../../component-forms/SeleccionarComponent";
import BotonesComponent from "../../component-forms/BotonesComponent";
import InputsComponent from "../../component-forms/InputsComponent";
import ChecksComponent from "../../component-forms/ChecksComponent";
import Elemento3d from "./Elemento3d";

function Form3d() {
  return (
    <div className="formulario3d">
      <form action="post">
        <div className="iseleccion">
          <Seleccionar direccion="elementos" />
          <div className="icheckear">
            <ChecksComponent />
          </div>
        </div>
        <InputsComponent label="Nombre del elemento" value="ne" />
        <div className="iflex">
          <div className="icantidad">
            <InputsComponent label="Cantidad" value="cantidad" />
          </div>
          <Seleccionar direccion="psi" />
        </div>
        <InputsComponent label="Largo" value="largo" />
        <InputsComponent label="Ancho" value="ancho" />
        <InputsComponent label="Alto" value="alto" />
        <div className="botones">
          <BotonesComponent nameText="CALCULAR" />
          <BotonesComponent nameText="HISTORIAL" />
        </div>
      </form>
      <Elemento3d />
    </div>
  );
}

export default Form3d;
