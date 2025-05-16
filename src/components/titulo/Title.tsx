import React, { useEffect, useState } from "react";

// Define el tipo de las props
interface TitleProps {
  titulo: string;
}

const Title: React.FC<TitleProps> = ({ titulo }) => {
  const [title, setTitle] = useState(titulo);

  useEffect(() => {
    setTitle(titulo); // Actualiza el título si cambia la prop
  }, [titulo]);

  useEffect(() => {
    document.title = title; // Cambia el título del documento
  }, [title]);

  return null;
};

export default Title;
