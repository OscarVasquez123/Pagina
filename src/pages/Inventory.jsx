import { FaBoxOpen, FaPlusCircle, FaHistory } from "react-icons/fa";

export default function Inventory() {
  return (
    <div className="container bg-dark min-vh-100 py-5">
      <h2 className="text-center text-warning mb-4">📦 Control de Inventario</h2>
      <p className="text-center text-light mb-4">
        Esta sección te permite tener control total sobre todos los productos que entran y salen de tu cigarrería. 
        Mantén tu stock siempre actualizado y evita pérdidas por vencimientos o rupturas de stock.
      </p>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="bg-black p-4 rounded shadow text-center border border-warning">
            <FaBoxOpen size={40} className="text-warning mb-3" />
            <h5 className="text-white">Productos en stock</h5>
            <p className="text-secondary">
              Consulta el listado completo de productos disponibles en tiempo real. 
              Revisa sus cantidades, códigos de barras, fechas de vencimiento y categorías.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="bg-black p-4 rounded shadow text-center border border-success">
            <FaPlusCircle size={40} className="text-success mb-3" />
            <h5 className="text-white">Ingresar producto</h5>
            <p className="text-secondary">
              Agrega nuevos productos al sistema fácilmente con su nombre, precio, proveedor, y datos clave. 
              Mantén todo bien organizado desde el primer momento.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="bg-black p-4 rounded shadow text-center border border-info">
            <FaHistory size={40} className="text-info mb-3" />
            <h5 className="text-white">Historial de movimientos</h5>
            <p className="text-secondary">
              Consulta todos los movimientos: entradas, salidas, devoluciones o ajustes. 
              Ideal para auditorías y análisis mensuales de inventario.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
