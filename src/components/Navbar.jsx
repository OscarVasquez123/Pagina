// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container">
        <Link to="/" className="navbar-brand text-white fw-bold">
          Cigarra.Net
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(1)" }}
          ></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white">
                Acerca
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white">
                Contacto
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link
                to="/login"
                className="btn"
                style={{
                  backgroundColor: "#FFD700",
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                Iniciar sesión
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
