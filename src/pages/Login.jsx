import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function Login() {
  const navigate = useNavigate();

  const usuarioValido = {
    email: "empleado@empresa.com",
    password: "123456",
  };

  const handleLogin = (email, password) => {
    if (email === usuarioValido.email && password === usuarioValido.password) {
      // Credenciales correctas → redirigir al Menú Hogar
      navigate("/home");
    } else {
      // Credenciales incorrectas → mostrar mensaje
      alert("Correo o contraseña incorrectos.");
    }
  };

  return <LoginForm onLogin={handleLogin} />;
}

