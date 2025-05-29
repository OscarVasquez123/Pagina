// src/components/LoginForm.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    setError("");
    onLogin(email, password);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-black">
      <form
        onSubmit={handleSubmit}
        className="p-4 rounded shadow w-100"
        style={{ maxWidth: "400px", backgroundColor: "#1a1a1a", color: "white" }}
      >
        <h2 className="text-center mb-4 text-white">Iniciar sesión</h2>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="email" className="form-label text-white">
            Correo electrónico
          </label>
          <input
            type="email"
            className="form-control bg-dark text-white border-0"
            id="email"
            placeholder="ejemplo@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label text-white">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control bg-dark text-white border-0"
            id="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="btn w-100"
          style={{
            backgroundColor: "#FFD700",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          Iniciar sesión
        </button>

        <div className="text-center mt-3">
          <Link to="/forgot-password" className="text-warning text-decoration-none">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <p className="text-center mt-3 mb-0">
          ¿No tienes cuenta?{" "}
          <a href="#" className="text-warning text-decoration-none">
            Regístrate
          </a>
        </p>
      </form>
    </div>
  );
}
