import React, { useState, useEffect } from "react";

function Titulo() {
  const [titulo, setTitulo] = useState(document.title);

  useEffect(() => {
    // Si el título cambia en otro lugar, puedes actualizarlo aquí
    setTitulo(document.title);
  }, []);

  return (
    <div>
      <h1>{titulo}</h1>
    </div>
  );
}

export default Titulo;
