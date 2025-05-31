import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ChangeNameTitle(): string {
  const tituloPath = useLocation();
  const [titulo, setTitulo] = useState("");

  useEffect(() => {
    const ruta: string = tituloPath.pathname;
    const tituloLimpio = () => {
      let barra = ruta.replace("/", "");
      barra = barra.replace("-", " ");
      if (barra.includes("2d")) {
        barra = barra.replace("2d", "2D");
      } else if (barra.includes("3d")) {
        barra = barra.replace("3d", "3D");
      }
      const texto = barra.charAt(0).toUpperCase() + barra.slice(1);
      return texto;
    };
    setTitulo(tituloLimpio);
  }, [tituloPath]);

  return titulo;
}

export default ChangeNameTitle;
