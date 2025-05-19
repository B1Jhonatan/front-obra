import Seleccionar from "../component-forms/SeleccionarComponent";
import Titulo from "../component-forms/Titulo";
import BotonesComponent from "../component-forms/BotonesComponent";
import InputsComponent from "../component-forms/InputsComponent";
import "./Form3d.css";
import ChecksComponent from "../component-forms/ChecksComponent";

function Form3d() {
  return (
    <div className="formulario3d">
      <form action="post">
        <div className="titulo">
          <Titulo />
        </div>
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
    </div>
  );
}

export default Form3d;
