// NOTE Types
import { NavBarProps } from "@/types";

import Image from "./Image";
import { useState } from "react";


export default function Navbar({ navbar, scrollToSection }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Botón menú hamburguesa - solo mobile */}
      <button
        className="
          fixed top-5 right-5 z-50 cursor-pointer
          bg-black p-2 rounded-sm border-b-2 border-r-1 border-l-1 border-gray-800
          md:hidden
        "
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir Menú"
      >
        <Image src="hamburger_menu.svg" customClass="size-8 inline-block" />
      </button>

      {/* Menú de navegación */}
      <div className="w-full relative">
        <nav
          className={`
          /* Mobile first */
          w-full h-full mx-auto bg-black/90 fixed top-0 left-0 py-4 flex flex-col items-center justify-center space-y-10 transition-all duration-300 rounded-b-sm z-40
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}

          /* md y arriba */
          md:opacity-100 md:pointer-events-auto md:flex md:flex-row md:justify-between md:space-y-0 md:bg-transparent md:border-none md:items-center md:w-10/12 md:h-auto md:mx-auto md:left-0 md:right-0 md:backdrop-blur-sm 
        `}
          onClick={() => setMenuOpen(false)}
        >
          {menuOpen && (
            <button
              className={`
              fixed top-8 left-8 z-50 cursor-pointer
              bg-black transition-all duration-400 hover:scale-110
              ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
              md:hidden
            `}
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar Menú"
            >
              <Image src="close_menu.svg" customClass="size-8 inline-block" />
            </button>
          )}
          {navbar.map(item => (
            <button
              key={item.id}
              className={`
                /* Mobile first */
                text-xl font-semibold border-b-2 border-transparent cursor-pointer px-8 py-2 rounded-sm w-10/12 
                hover:bg-white/90 hover:text-black transition-all duration-300

                /* md y arriba */
                md:w-auto md:text-lg
              `}
              onClick={() => {
                setMenuOpen(false);
                scrollToSection(item.section);
              }}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
