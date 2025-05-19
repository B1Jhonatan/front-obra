import ImprimirComponent from "../component-forms/ImprimirComponent";
import BotonesComponent from "../component-forms/BotonesComponent";
import "./Elemento3d.css";

function Elemento3D() {
  return (
    <div className="boxElemento">
      <h2>Elemento</h2>
      <div className="elemento-guardar">
        <ImprimirComponent nombre="Elemento:" />
        <div className="ele-save">
          <label htmlFor="">Elemento: </label>
          <label htmlFor="" id="elementoe"></label>
        </div>
        <div className="ele-save">
          <label htmlFor="">PSI: </label>
          <label htmlFor="" id="psie"></label>
        </div>
        <div className="ele-save">
          <label htmlFor="">Cantidad: </label>
          <label htmlFor="" id="cantidade"></label>
        </div>
        <div className="ele-save">
          <label htmlFor="">Largo: </label>
          <label htmlFor="" id="largoe"></label>
        </div>
        <div className="ele-save">
          <label htmlFor="">Ancho: </label>
          <label htmlFor="" id="anchoe"></label>
        </div>
        <div className="ele-save">
          <label htmlFor="">Alto: </label>
          <label htmlFor="" id="altoe"></label>
        </div>
        <div className="ele-save">
          <label htmlFor="">Area unidad: </label>
          <label htmlFor="" id="area-unidade"></label>
        </div>
        <div className="ele-save">
          <label htmlFor="">Area total: </label>
          <label htmlFor="" id="area-totale"></label>
        </div>
        <div className="ele-save">
          <label htmlFor="">Cemento unidad: </label>
          <label htmlFor="" id="cemento-unidad"></label>
        </div>
        <div className="ele-save">
          <label htmlFor="">Cemento total: </label>
          <label htmlFor="" id="cemento-total"></label>
        </div>
        <div className="ele-save">
          <label htmlFor="">Arena unidad: </label>
          <label htmlFor="" id="arena-unidade"></label>
        </div>
        <div className="ele-save">
          <label htmlFor="">Arena total: </label>
          <label htmlFor="" id="arena-total"></label>
        </div>
        <div className="ele-save">
          <label htmlFor="">Grava unidad: </label>
          <label htmlFor="" id="grava-unidad"></label>
        </div>
        <div className="ele-save">
          <label htmlFor="">Grava total: </label>
          <label htmlFor="" id="grava-total"></label>
        </div>
        <div className="ele-save">
          <label htmlFor="">Agua unidad: </label>
          <label htmlFor="" id="agua-unidad"></label>
        </div>
        <div className="ele-save">
          <label htmlFor="">Agua total: </label>
          <label htmlFor="" id="agua-total"></label>
        </div>
      </div>
      <div>
        <BotonesComponent nameText="Modficar" />
        <BotonesComponent nameText="Guardar" />
      </div>
    </div>
  );
}

export default Elemento3D;
