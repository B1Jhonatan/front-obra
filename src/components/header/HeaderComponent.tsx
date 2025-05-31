import Titulo from "../component-forms/Titulo";
import "./HeaderComponent.css";

function Header() {
  return (
    <header className="iheader">
      <div className="tituloH">
        <Titulo />
      </div>
      <div className="menu">
        <p>Inicio</p>
        <p>Contacto</p>
        <p>Sobre nosotros</p>
        <p>Iniciar sesion</p>
      </div>
    </header>
  );
}

export default Header;
