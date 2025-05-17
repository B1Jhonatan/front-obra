interface texto {
  texto: string;
}

function Inputs({ texto }: texto) {
  return (
    <div className="iform">
      <label htmlFor="">{texto}</label>
      <input className="itext" type="text" placeholder="Numero mayor a cero" />
    </div>
  );
}

export default Inputs;
