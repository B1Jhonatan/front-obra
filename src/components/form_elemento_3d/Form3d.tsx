import Seleccionar from "../component-forms/SeleccionarComponent";
import BotonesComponent from "../component-forms/BotonesComponent";
import InputsComponent from "../component-forms/InputsComponent";
import "./Form3d.css";
import ChecksComponent from "../component-forms/ChecksComponent";
import Elemento3d from "../form_elemento_3d/Elemento3d";

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
        <InputsComponent texto="Nombre del elemento" />
        <div className="iflex">
          <div className="icantidad">
            <InputsComponent texto="Cantidad" />
          </div>
          <Seleccionar direccion="psi" />
        </div>
        <InputsComponent texto="Largo" />
        <InputsComponent texto="Ancho" />
        <InputsComponent texto="Alto" />
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
