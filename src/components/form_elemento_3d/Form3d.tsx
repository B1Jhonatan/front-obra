import Seleccionar from "../component-forms/SeleccionarComponent";
import Titulo from "../component-forms/Titulo";
import BotonesComponent from "../component-forms/BotonesComponent";
import Inputs from "../component-forms/InputsComponent";
import "./Form3d.css";
import ChecksComponent from "../component-forms/ChecksComponent";

function Form3d() {
  return (
    <div className="formulario3d">
      <Titulo />
      <form action="post">
        <div className="iseleccion">
          <Seleccionar direccion="elementos" />
          <div className="icheckear">
            <ChecksComponent />
          </div>
        </div>
        <Inputs texto="Nombre del elemento:" />
        <div className="iflex">
          <div className="icantidad">
            <Inputs texto="Cantidad:" />
          </div>
          <Seleccionar direccion="psi" />
        </div>
        <Inputs texto="Largo:" />
        <Inputs texto="Ancho:" />
        <Inputs texto="Alto:" />
        <div>
          <BotonesComponent nameText="Calcular" />
          <BotonesComponent nameText="Historial" />
        </div>
      </form>
    </div>
  );
}

export default Form3d;
