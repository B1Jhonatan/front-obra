import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./components/header/header.tsx";
import MenuLateral from "./components/menu/MenuLateral.tsx";
import Title from "./components/titulo/Title.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Title titulo="Cantidades de obra" />
    <Header />
    <App />
    <MenuLateral />
  </StrictMode>
);
