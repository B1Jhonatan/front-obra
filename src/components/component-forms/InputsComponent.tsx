import "./InputsComponent.css";

interface texto {
  texto: string;
}

function Inputs({ texto }: texto) {
  return (
    <div className="iinput">
      <label htmlFor="">{texto}</label>
      <input className="itext" type="text" placeholder="Numero mayor a cero" />
    </div>
  );
}

export default Inputs;
