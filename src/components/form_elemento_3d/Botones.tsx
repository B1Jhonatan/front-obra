interface ParamBoton {
  nameText: string;
}

function Botones({ nameText }: ParamBoton) {
  return (
    <div className="botonese">
      <button>{nameText}</button>
    </div>
  );
}

export default Botones;
