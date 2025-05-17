interface NombreCheck {
  nombre: string;
  checked: boolean;
  onChange: (nombre: string) => void;
}

function CheckComponent({ nombre, checked, onChange }: NombreCheck) {
  const id = `check-${nombre.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="ialinear">
      <label htmlFor={id}>{nombre}</label>
      <input
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
