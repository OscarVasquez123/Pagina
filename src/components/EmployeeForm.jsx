import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const EmployeeForm = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">
        <div className="flex justify-center mb-6">
          <UserCircleIcon className="h-20 w-20 text-gray-400" />
        </div>
        <form className="space-y-4">
          <Input label="Nombres Completo" />
          <Input label="Número Empleado" />
          <Input label="Cargo" />
          <Input label="Número Celular" />
          <Input label="Dirección" />
          <Input label="Contacto Emergencia" />
          <Input label="EPS" />
          <Input label="Contrato" />
        </form>
      </div>
    </div>
  );
};

const Input = ({ label }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type="text"
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
    />
  </div>
);

export default EmployeeForm;
