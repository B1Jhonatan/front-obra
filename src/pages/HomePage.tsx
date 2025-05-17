import FooterComponent from "../components/footer/FooterComponent";
import HeaderComponent from "../components/header/HeaderComponent";
import MenuLateral from "../components/menu/MenuLateral";

function HomePage() {
  return (
    <div>
      <HeaderComponent />
      <MenuLateral />
      <FooterComponent />
    </div>
  );
}
export default HomePage;
