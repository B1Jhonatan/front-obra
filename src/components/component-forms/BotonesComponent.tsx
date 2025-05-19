import "./BotonesComponent.css";

interface ParamBoton {
  nameText: string;
}

function BotonesComponent({ nameText }: ParamBoton) {
  return (
    <div>
      <button className="boton">{nameText}</button>
    </div>
  );
}

export default BotonesComponent;
