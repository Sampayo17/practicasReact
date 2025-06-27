import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-blue-900 to-black px-8 py-4 flex justify-center shadow-lg rounded-b-2xl border-b-4 border-blue-900">
      <div className="flex space-x-10 bg-white/10 backdrop-blur-md px-8 py-2 rounded-full shadow-md">
        <NavLink
          className="text-gray-200 text-2xl font-extrabold tracking-wide hover:text-blue-300 hover:scale-110 transition-all duration-200"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="text-gray-200 text-2xl font-extrabold tracking-wide hover:text-blue-300 hover:scale-110 transition-all duration-200"
          to="informacion"
        >
          Información
        </NavLink>
        <NavLink
          className="text-gray-200 text-2xl font-extrabold tracking-wide hover:text-blue-300 hover:scale-110 transition-all duration-200"
          to="/contacto"
        >
          Contacto
        </NavLink>
        <NavLink
          className="text-gray-200 text-2xl font-extrabold tracking-wide hover:text-blue-300 hover:scale-110 transition-all duration-200"
          to="/sobre-nosotros"
        >
          Sobre Nosotros
        </NavLink>
        <NavLink
          className="text-gray-200 text-2xl font-extrabold tracking-wide hover:text-blue-300 hover:scale-110 transition-all duration-200"
          to="/test"
        >
          Pruebas
        </NavLink>
      </div>
    </nav>
  );
}
