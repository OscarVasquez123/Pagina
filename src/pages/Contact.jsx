// src/pages/Contact.jsx
export default function Contact() {
  return (
    <div className="container mt-5 mb-5" style={{ maxWidth: "700px" }}>
      <h1 className="mb-4 text-center" style={{ color: "#222", fontWeight: "700" }}>
        Contáctanos
      </h1>
      <p className="text-center mb-4" style={{ fontSize: "18px", color: "#555" }}>
        Estamos aquí para ayudarte. Si tienes preguntas, sugerencias o necesitas soporte, comunícate con nosotros usando los siguientes datos:
      </p>

      <div
        className="p-4 rounded"
        style={{ backgroundColor: "#f8f9fa", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
      >
        <h3 style={{ color: "#333", marginBottom: "20px" }}>Información de Contacto</h3>
        <ul style={{ listStyle: "none", paddingLeft: 0, fontSize: "16px", color: "#444" }}>
          <li className="mb-3">
            <strong>Email: </strong>
            <a href="mailto:netcigarra@gmail.com" style={{ color: "#007bff", textDecoration: "none" }}>
              netcigarra@gmail.com
            </a>
          </li>
          <li className="mb-3">
            <strong>Teléfono 1: </strong>
            <a href="tel:+573152319646" style={{ color: "#007bff", textDecoration: "none" }}>
              315 231 9646
            </a>
          </li>
          <li className="mb-3">
            <strong>Teléfono 2: </strong>
            <a href="tel:+573128365179" style={{ color: "#007bff", textDecoration: "none" }}>
              312 836 5179
            </a>
          </li>
        </ul>

        <p style={{ marginTop: "30px", fontSize: "15px", color: "#666" }}>
          Nuestro equipo está disponible de lunes a viernes, de 8:00 a.m. a 6:00 p.m. para atender tus solicitudes.  
          Te responderemos a la brevedad.
        </p>
      </div>
    </div>
  );
}
