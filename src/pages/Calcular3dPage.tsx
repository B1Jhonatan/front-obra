import FooterComponent from "../components/footer/FooterComponent";
import Form3d from "../components/form_elemento_3d/Form3d";
import HeaderComponent from "../components/header/HeaderComponent";
import MenuLateral from "../components/menu/MenuLateral";
import Elemento3D from "../components/form_elemento_3d/Elemento3d";
import "./Calcular3dPage.css";

function Calcular3dPage() {
  return (
    <div>
      <HeaderComponent />
      <div className="iform">
        <Form3d />
        <Elemento3D />
      </div>
      <MenuLateral />
      <FooterComponent />
    </div>
  );
}

export default Calcular3dPage;
