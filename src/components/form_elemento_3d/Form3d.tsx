import Seleccionar from "../component-forms/Seleccionar";
import Titulo from "../component-forms/Titulo";
import Botones from "./Botones";
import "./Form3d.css";
import Inputs from "./Inputs";

function Form3d() {
  return (
    <div className="formulario3d">
      <Titulo />
      <form action="post">
        <Seleccionar direccion="elementos" />
        <Seleccionar direccion="psi" />
        <div className="">
          <Inputs texto="Nombre del elemento:" />
          <Inputs texto="Cantidad:" />
        </div>
        <Inputs texto="Largo:" />
        <Inputs texto="Ancho:" />
        <Inputs texto="Alto:" />
        <div className="ibotones">
          <Botones nameText="Calcular" />
          <Botones nameText="Historial" />
        </div>
      </form>
    </div>
  );
}

export default Form3d;
