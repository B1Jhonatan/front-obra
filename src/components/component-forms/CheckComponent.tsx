interface NombreCheck {
  nombre: string;
  checked: boolean;
  onChange: (nombre: string) => void;
}

function CheckComponent({ nombre, checked, onChange }: NombreCheck) {
  const id = `${nombre.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="alinear-cuadro">
      <label htmlFor={id}>{nombre}</label>
      <input
        className="cuadro"
        id={id}
        type="checkbox"
        value={nombre}
        checked={checked}
        onChange={() => onChange(nombre)}
      />
    </div>
  );
}

export default CheckComponent;
