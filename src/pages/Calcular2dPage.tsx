import Form2d from "../components/form_elemento_2d/Form2d";
import Elemento3D from "../components/form_elemento_3d/Elemento3d";

function Calcular2dPage() {
  return (
    <div>
      <div className="iform">
        <Form2d />
        <Elemento3D />
      </div>
    </div>
  );
}

export default Calcular2dPage;
