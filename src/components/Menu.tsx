import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-4 flex justify-center shadow-lg rounded-b-2xl border-b-4 border-pink-300">
      <div className="flex space-x-10 bg-white/20 backdrop-blur-md px-8 py-2 rounded-full shadow-md">
        <NavLink
          className="text-white text-2xl font-extrabold tracking-wide hover:text-pink-200 hover:scale-110 transition-all duration-200"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="text-white text-2xl font-extrabold tracking-wide hover:text-pink-200 hover:scale-110 transition-all duration-200"
          to="informacion"
        >
          Información
        </NavLink>
        <NavLink
          className="text-white text-2xl font-extrabold tracking-wide hover:text-pink-200 hover:scale-110 transition-all duration-200"
          to="/contacto"
        >
          Contacto
        </NavLink>
        <NavLink
          className="text-white text-2xl font-extrabold tracking-wide hover:text-pink-200 hover:scale-110 transition-all duration-200"
          to="/sobre-nosotros"
        >
          Sobre Nosotros
        </NavLink>
        <NavLink
          className="text-white text-2xl font-extrabold tracking-wide hover:text-pink-200 hover:scale-110 transition-all duration-200"
          to="/test"
        >
          Pruebas
        </NavLink>
      </div>
    </nav>
  );
}
