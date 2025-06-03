import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "#121212", padding: "1rem" }}>
      <div className="container" style={{ display: "flex", gap: "1.5rem" }}>
        <Link to="/" style={{ color: "#FFD700", fontWeight: "700", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/demo" style={{ color: "#FFD700", fontWeight: "700", textDecoration: "none" }}>
          Demo
        </Link>
        <Link to="/contact" style={{ color: "#FFD700", fontWeight: "700", textDecoration: "none" }}>
          Contacto
        </Link>
        <Link to="/gallery" style={{ color: "#FFD700", fontWeight: "700", textDecoration: "none" }}>
          Galería
        </Link> {/* Nuevo botón */}
      </div>
    </nav>
  );
}
