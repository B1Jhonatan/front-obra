import { Link } from "react-router-dom";
import "./MenuLateral.css";

function MenuLateral() {
  return (
    <div className="m-menu">
      <div className="m-titulo">
        <h2>Menu</h2>
      </div>
      <nav>
        <ul className="m-lista">
          <li>
            <Link to="/calcular-3d">Crear elemento 3D</Link>
          </li>
          <li>
            <Link to="/calcular-2d">Crear elemento 2D</Link>
          </li>
          <li>
            <Link to="/historial">Historial</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuLateral;
