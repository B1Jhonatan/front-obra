import "./InputsComponent.css";

interface props {
  label: string;
  value: string;
}

function Inputs({ label, value }: props) {
  return (
    <div className="iinput">
      <label htmlFor="">{label}:</label>
      <input
        className="itext"
        type="text"
        value={value}
        placeholder="Numero mayor a cero"
      />
    </div>
  );
}

export default Inputs;
