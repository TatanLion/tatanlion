// NOTE Types
import { NavBarProps } from "@/types";

export default function Navbar({ navbar }: NavBarProps) {

  return (
    <nav className='w-[80%] flex flex-col space-y-2 md:flex-row items-center justify-between mx-auto'>
      {navbar.map(item => (
        <button key={item.id} className="text-lg cursor-pointer hover:borber-bottom hover:border-white">
          {item.name}
        </button>
      ))}
    </nav>
  )
}
