import { Link } from "react-router-dom";
import "./MenuLateral.css";

function MenuLateral() {
  return (
    <div className="iMenu">
      <h2>Menu</h2>
      <nav>
        <ul className="iLista">
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
