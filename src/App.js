import React from "react";
import ReactDOM from "react-dom/client"; // Usa 'react-dom/client' para React 18
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Crea el root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
import React from "react";

function App() {
  return (
    <div>
      <h1>Bienvenido a AluraFlix</h1>
    </div>
  );
}

export default App; // Exportación predeterminada
