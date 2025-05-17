import { useEffect, useState } from "react";
import "./HeaderComponent.css";

function Header() {
  const [titulo, setTitulo] = useState("");
  useEffect(() => {
    setTitulo(document.title);
  });
  return (
    <header className="iheader">
      <div className="tituloH">
        <h1>{titulo}</h1>
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
