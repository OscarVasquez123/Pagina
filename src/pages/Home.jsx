// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 text-center"
      style={{ backgroundColor: "#000", color: "#fff" }}
    >
      <h1 className="mb-4 fw-bold">Bienvenido a Cigarra.Net</h1>
      <p className="mb-4" style={{ maxWidth: "600px" }}>
        Esta es tu plataforma para gestionar procesos de votación y más. Inicia sesión para comenzar o crea una cuenta nueva si aún no tienes una.
      </p>

      <div>
        <Link
          to="/login"
          className="btn me-3"
          style={{
            backgroundColor: "#FFD700",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          Iniciar sesión
        </Link>

        <Link
          to="/register"
          className="btn"
          style={{
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          Registrarse
        </Link>
      </div>
    </div>
  );
}
