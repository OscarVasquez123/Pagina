export default function Demo() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        color: "#fff",
        padding: "3rem 1rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div className="container" style={{ maxWidth: "700px", margin: "auto" }}>
        <h2 style={{ color: "#FFD700", marginBottom: "2rem", fontWeight: "700", textAlign: "center" }}>
          Demo de Cigarra.Net
        </h2>

        <p style={{ fontSize: "1.2rem", lineHeight: "1.6", marginBottom: "2rem", textAlign: "center" }}>
          Bienvenido a la demostración de Cigarra.Net, la plataforma que optimiza la gestión de inventarios
          para cigarrerías locales. Aquí podrás ver un resumen de las funcionalidades clave que facilitan
          tu trabajo diario.
        </p>

        <ul
          style={{
            backgroundColor: "#121212",
            borderRadius: "12px",
            padding: "2rem",
            listStyleType: "none",
            color: "#ccc",
            fontSize: "1.1rem",
            lineHeight: "1.5",
            boxShadow: "0 4px 15px rgba(255, 215, 0, 0.2)",
          }}
        >
          <li style={{ marginBottom: "1rem" }}>
            <strong style={{ color: "#FFD700" }}>• Control de Inventario:</strong> Visualiza y actualiza el stock en tiempo real, registrando entradas y salidas fácilmente.
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <strong style={{ color: "#FFD700" }}>• Alertas Inteligentes:</strong> Recibe notificaciones sobre productos próximos a vencer o agotarse para tomar acciones inmediatas.
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <strong style={{ color: "#FFD700" }}>• Gestión de Empleados:</strong> Administra roles, turnos y permisos para un equipo organizado y eficiente.
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <strong style={{ color: "#FFD700" }}>• Reportes Personalizados:</strong> Analiza las ventas y el rendimiento para tomar decisiones basadas en datos.
          </li>
        </ul>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <button
            onClick={() => alert("Aquí podría ir un video o demo interactivo más adelante")}
            style={{
              backgroundColor: "#FFD700",
              color: "#000",
              fontWeight: "700",
              padding: "0.75rem 2rem",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1.1rem",
              border: "none",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#e6c200")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#FFD700")}
          >
            Ver demo interactiva (próximamente)
          </button>
        </div>
      </div>
    </div>
  );
}
