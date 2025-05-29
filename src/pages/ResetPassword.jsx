import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí simulas la verificación del código y el cambio de contraseña
    console.log("Código ingresado:", code);
    console.log("Nueva contraseña:", newPassword);
    alert("¡Contraseña actualizada exitosamente!");
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2>Ingresar código y nueva contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Código de verificación</label>
          <input
            type="text"
            className="form-control"
            placeholder="123456"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nueva contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="********"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Actualizar contraseña</button>
      </form>
    </div>
  );
}
