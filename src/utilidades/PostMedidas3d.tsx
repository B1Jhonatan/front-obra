import type { ElementoPostDto } from "./DTO/ElementoPostDto";

function handlePostMedidas(elemento: ElementoPostDto) {
  fetch("http://localhost:8080/calcular/medidas-3d", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(elemento),
  })
    .then((respose) => {
      return respose.json;
    })
    .then((data) => {
      console.log(data);
    });
}

export default handlePostMedidas;
