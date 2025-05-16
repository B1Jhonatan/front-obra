import Seleccionar from "../component-forms/Seleccionar";
import Titulo from "../component-forms/Titulo";
import Botones from "./Botones";
import Elemento3D from "./Elemento3d";
import "./Form3d.css";

function Form3d() {
  return (
    <div className="formulario3d">
      <Titulo />
      <form action="post">
        <Seleccionar />
        <div className="iform">
          <input
            type="text"
            name=""
            id="elemento"
            placeholder="Nombre del elemento"
          />
          <input
            type="text"
            name=""
            id="cantidad"
            placeholder="Ingrese la cantidad"
          />
        </div>
        <div className="iform">
          <label htmlFor="">Largo: </label>
          <input className="itext" type="text" placeholder="largo" />
        </div>
        <div className="iform">
          <label htmlFor="">Ancho: </label>
          <input className="itext" type="text" placeholder="ancho" />
        </div>
        <div className="iform">
          <label htmlFor="">Alto: </label>
          <input className="itext" type="text" placeholder="alto" />
        </div>
        <div className="ibotones">
          <Botones nameText="Calcular" />
          <Botones nameText="Historial" />
        </div>
      </form>
    </div>
  );
}

export default Form3d;
