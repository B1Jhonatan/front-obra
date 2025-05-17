import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Calcular2dPage from "./pages/Calcular2dPage";
import HistorialPage from "./pages/HistorialPage";
import Calcular3dPage from "./pages/Calcular3dPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/calcular-3d" element={<Calcular3dPage />} />
      <Route path="/calcular-2d" element={<Calcular2dPage />} />
      <Route path="/historial" element={<HistorialPage />} />
    </Routes>
  );
}

export default App;
