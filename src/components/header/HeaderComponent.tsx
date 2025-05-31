import { Link } from "react-router-dom";
import Titulo from "../component-forms/Titulo";
import "./HeaderComponent.css";

function Header() {
  return (
    <header className="iheader">
      <div className="tituloH">
        <Titulo />
      </div>
      <div className="menu">
        <Link to="/">Inicio</Link>
        <Link to="/sobre-mi">Sobre mi</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/Inicia-sesion">Iniciar sesion</Link>
      </div>
    </header>
  );
}

export default Header;
