import { FaUserPlus, FaUsersCog, FaCalendarAlt } from "react-icons/fa";

export default function Employees() {
  return (
    <div className="container bg-dark min-vh-100 py-5">
    <h2 className="text-center text-warning mb-4">👥 Gestión de Empleados</h2>
      <p className="text-center text-light mb-4">
        Lleva un control detallado de tu equipo de trabajo. Desde la asignación de turnos hasta los roles 
        y las tareas diarias, todo centralizado para que tu negocio funcione con eficiencia.
      </p>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="bg-black p-4 rounded shadow text-center border border-info">
            <FaUserPlus size={40} className="text-info mb-3" />
            <h5 className="text-white">Agregar nuevo empleado</h5>
            <p className="text-secondary">
              Registra a cada persona que entra a trabajar contigo: nombre, cargo, horario y datos de contacto. 
              Todo queda almacenado para futuras consultas o reportes.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="bg-black p-4 rounded shadow text-center border border-primary">
            <FaUsersCog size={40} className="text-primary mb-3" />
            <h5 className="text-white">Administrar personal</h5>
            <p className="text-secondary">
              Consulta la lista completa de empleados, edita sus datos, cámbiales de turno o asigna nuevas tareas. 
              Mantén todo actualizado y claro.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="bg-black p-4 rounded shadow text-center border border-success">
            <FaCalendarAlt size={40} className="text-success mb-3" />
            <h5 className="text-white">Control de turnos</h5>
            <p className="text-secondary">
              Organiza los horarios de trabajo. Asigna quién trabaja cada día, ajusta vacaciones o turnos dobles 
              según tus necesidades.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
