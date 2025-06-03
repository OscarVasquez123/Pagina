import { FaExclamationTriangle, FaClock } from "react-icons/fa";

export default function Alerts() {
  return (
    <div className="container bg-dark min-vh-100 py-5">
        <h2 className="text-center text-warning mb-4">🚨 Alertas inteligentes</h2>
      <p className="text-center text-light mb-4">
        Las alertas son generadas automáticamente por el sistema para avisarte de productos que necesitan atención urgente. 
        No pierdas dinero por falta de stock o vencimientos que se pudieron evitar.
      </p>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="bg-black p-4 rounded shadow text-center border border-danger">
            <FaExclamationTriangle size={40} className="text-danger mb-3" />
            <h5 className="text-white">Bajo stock</h5>
            <p className="text-secondary">
              Visualiza productos que están a punto de acabarse. El sistema te sugiere cuándo hacer nuevos pedidos 
              y te permite generar reportes para tus proveedores.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="bg-black p-4 rounded shadow text-center border border-warning">
            <FaClock size={40} className="text-warning mb-3" />
            <h5 className="text-white">Vencimientos próximos</h5>
            <p className="text-secondary">
              Te avisamos cuando un producto está por vencer en menos de 30 días. 
              Esto te ayuda a aplicar descuentos o promociones para rotar inventario antes de perderlo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
