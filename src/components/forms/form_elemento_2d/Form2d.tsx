import BotonesComponent from "../../component-forms/BotonesComponent";
import ChecksComponent from "../../component-forms/ChecksComponent";
import InputsComponent from "../../component-forms/InputsComponent";
import Seleccionar from "../../component-forms/SeleccionarComponent";
import Elemento3d from "../form_elemento_3d/Elemento3d";

function Form2d() {
  return (
    <div>
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
          <div className="botones">
            <BotonesComponent nameText="CALCULAR" />
            <BotonesComponent nameText="HISTORIAL" />
          </div>
        </form>
        <Elemento3d />
      </div>
    </div>
  );
}

export default Form2d;
