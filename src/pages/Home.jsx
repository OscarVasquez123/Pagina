import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Control de inventario",
      description:
        "Registra entradas y salidas, conoce tu stock en tiempo real y evita faltantes.",
      buttonText: "Saber más",
      path: "/inventory",
    },
    {
      title: "Alertas inteligentes",
      description:
        "Recibe notificaciones sobre productos próximos a vencer o agotarse para actuar rápido.",
      buttonText: "Descubre cómo",
      path: "/alerts",
    },
    {
      title: "Gestión de empleados",
      description:
        "Administra roles, nóminas y turnos para un manejo eficiente de tu equipo.",
      buttonText: "Conoce más",
      path: "/employees",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        color: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div className="container">
        <header className="text-center mb-5">
          <h1 style={{ fontWeight: "900", fontSize: "3rem" }}>
            Bienvenido a <span style={{ color: "#FFD700" }}>Cigarra.Net</span>
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#ccc",
              maxWidth: "600px",
              margin: "auto",
            }}
          >
            La plataforma ideal para la gestión eficiente y automatizada de inventarios en
            cigarrerías locales. Controla tus productos, evita pérdidas y optimiza tus ventas.
          </p>
        </header>

        <section className="row g-4 justify-content-center">
          {features.map(({ title, description, buttonText, path }, idx) => (
            <div
              key={idx}
              className="col-md-4"
              style={{
                backgroundColor: "#121212",
                borderRadius: "12px",
                padding: "2rem",
                boxShadow:
                  "0 4px 15px rgba(255, 215, 0, 0.2), 0 2px 6px rgba(255, 215, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <div>
                <h3
                  style={{
                    color: "#FFD700",
                    fontWeight: "700",
                    marginBottom: "1rem",
                  }}
                >
                  {title}
                </h3>
                <p style={{ color: "#ddd", fontSize: "1rem", lineHeight: "1.5" }}>
                  {description}
                </p>
              </div>
              <button
                style={{
                  marginTop: "1.5rem",
                  backgroundColor: "#FFD700",
                  border: "none",
                  color: "#000",
                  fontWeight: "700",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "6px",
                  cursor: "pointer",
                  alignSelf: "start",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#e6c200")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#FFD700")}
                onClick={() => navigate(path)}
              >
                {buttonText}
              </button>
            </div>
          ))}
        </section>

        <section
          className="text-center mt-5"
          style={{
            backgroundColor: "#121212",
            padding: "2rem",
            borderRadius: "12px",
            maxWidth: "500px",
            margin: "3rem auto 0",
          }}
        >
          <h2 style={{ color: "#FFD700", marginBottom: "1rem" }}>
            ¿Quieres ver Cigarra.Net en acción?
          </h2>
          <p style={{ color: "#ccc", marginBottom: "2rem" }}>
            Solicita una demostración personalizada y descubre cómo podemos ayudarte a optimizar
            tu negocio.
          </p>
          <button
            style={{
              backgroundColor: "#FFD700",
              border: "none",
              color: "#000",
              fontWeight: "700",
              padding: "0.75rem 2rem",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1.1rem",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#e6c200")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#FFD700")}
            onClick={() => navigate("/demo")}
          >
            Solicitar demo
          </button>
        </section>

        <footer
          className="text-center mt-5"
          style={{ color: "#666", fontSize: "0.9rem" }}
        >
          © 2025 Cigarra.Net - Todos los derechos reservados.
        </footer>
      </div>
    </div>
  );
}
