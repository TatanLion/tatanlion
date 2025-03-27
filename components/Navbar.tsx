// NOTE Types
import { NavBarProps } from "@/types";

export default function Navbar({ navbar, onScrollToSection }: NavBarProps) {

  return (
    <nav className='w-[80%] flex flex-col space-y-2 md:flex-row items-center justify-between mx-auto'>
      {navbar.map(item => (
        <button 
          key={item.id} 
          className="text-lg cursor-pointer font-semibold border-b-2 border-transparent hover:border-white"
          onClick={() => onScrollToSection(item.id - 1)}
        >
          {item.name}
        </button>
      ))}
    </nav>
  )
}
