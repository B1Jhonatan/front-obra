import { useEffect, useState } from "react";
import ChangeNameTitle from "../../utilidades/ChangeNameTitle";

function Titulo() {
  const title: string = ChangeNameTitle();
  const [titulo, setTitulo] = useState("");

  useEffect(() => {
    if (title === "") {
      setTitulo("Cantidades de obra");
    } else {
      setTitulo(title);
    }
  }, [title]);
  useEffect(() => {
    document.title = titulo;
  });

  return (
    <div>
      <h1>{titulo}</h1>
    </div>
  );
}

export default Titulo;
