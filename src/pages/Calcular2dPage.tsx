import FooterComponent from "../components/footer/FooterComponent";
import Form2d from "../components/form_elemento_2d/Form2d";
import Elemento3D from "../components/form_elemento_3d/Elemento3d";
import HeaderComponent from "../components/header/HeaderComponent";
import MenuLateral from "../components/menu/MenuLateral";

function Calcular2dPage() {
  return (
    <div>
      <HeaderComponent />
      <div className="iform">
        <Form2d />
        <Elemento3D />
      </div>
      <MenuLateral />
      <FooterComponent />
    </div>
  );
}

export default Calcular2dPage;
