import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Calcular2dPage from "./pages/Calcular2dPage";
import HistorialPage from "./pages/HistorialPage";
import Calcular3dPage from "./pages/Calcular3dPage";
import HeaderComponent from "./components/header/HeaderComponent";
import FooterComponent from "./components/footer/FooterComponent";
import MenuLateral from "./components/menu/MenuLateral";

function App() {
  return (
    <div className="g-app">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calcular-3d" element={<Calcular3dPage />} />
        <Route path="/calcular-2d" element={<Calcular2dPage />} />
        <Route path="/historial" element={<HistorialPage />} />
      </Routes>
      <MenuLateral />
      <FooterComponent />
    </div>
  );
}

export default App;
